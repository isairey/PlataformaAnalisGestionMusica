document.addEventListener('DOMContentLoaded', async () => {
  const chartsContainer = document.getElementById(
    'characteristicChartsContainer'
  )

  try {
    const data = await fetchChartData('/reports/chart-2.json')
    const chartDataByArtist = organizeDataByArtist(data)
    createRadarCharts(chartsContainer, chartDataByArtist)
  } catch (error) {
    console.error('Error fetching chart data:', error)
  }
})

async function fetchChartData(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText)
  }
  return await response.json()
}

function organizeDataByArtist(data) {
  const chartDataByArtist = {}

  data.forEach(item => {
    if (!chartDataByArtist[item.artist_name]) {
      chartDataByArtist[item.artist_name] = []
    }
    chartDataByArtist[item.artist_name].push({
      label: item.album_name,
      data: [
        item.average_danceability,
        item.average_energy,
        item.average_speechiness,
        item.average_acousticness,
        item.average_liveness
      ]
    })
  })

  return chartDataByArtist
}

function createRadarCharts(container, chartDataByArtist) {
  const labels = [
    'Danceability',
    'Energy',
    'Speechiness',
    'Acousticness',
    'Liveness'
  ]
  const colors = [
    'rgba(255, 99, 132, 0.2)', // Light red
    'rgba(54, 162, 235, 0.2)', // Light blue
    'rgba(255, 206, 86, 0.2)', // Light yellow
    'rgba(75, 192, 192, 0.2)', // Light green
    'rgba(153, 102, 255, 0.2)', // Light purple
    'rgba(255, 159, 64, 0.2)', // Light orange
    'rgba(199, 199, 199, 0.2)', // Light gray
    'rgba(83, 102, 255, 0.2)', // Light indigo
    'rgba(255, 99, 255, 0.2)', // Light magenta
    'rgba(99, 255, 132, 0.2)' // Light lime
  ]

  const borderColors = [
    'rgba(255, 99, 132, 1)', // Red
    'rgba(54, 162, 235, 1)', // Blue
    'rgba(255, 206, 86, 1)', // Yellow
    'rgba(75, 192, 192, 1)', // Green
    'rgba(153, 102, 255, 1)', // Purple
    'rgba(255, 159, 64, 1)', // Orange
    'rgba(199, 199, 199, 1)', // Gray
    'rgba(83, 102, 255, 1)', // Indigo
    'rgba(255, 99, 255, 1)', // Magenta
    'rgba(99, 255, 132, 1)' // Lime
  ]

  Object.keys(chartDataByArtist).forEach(artist => {
    const artistContainer = document.createElement('div')
    artistContainer.className = 'chart-container'

    const artistTitle = document.createElement('h2')
    artistTitle.textContent = artist
    artistContainer.appendChild(artistTitle)

    const canvas = document.createElement('canvas')
    artistContainer.appendChild(canvas)
    container.appendChild(artistContainer)

    const datasets = chartDataByArtist[artist].map((album, index) => ({
      label: album.label,
      data: album.data,
      fill: true,
      backgroundColor: colors[index % colors.length],
      borderColor: borderColors[index % borderColors.length],
      pointBackgroundColor: borderColors[index % borderColors.length],
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: borderColors[index % borderColors.length]
    }))

    new Chart(canvas.getContext('2d'), {
      type: 'radar',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    })
  })
}
