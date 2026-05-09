document.addEventListener('DOMContentLoaded', async () => {
  const ctx = document.getElementById('loudnessChart').getContext('2d')

  try {
    const data = await fetchChartData('/reports/chart-3.json')
    createScatterChart(ctx, data)
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

function createScatterChart(ctx, data) {
  const chartData = data.map(album => ({
    x: new Date(album.release_date), // Ensure date parsing
    y: album.average_loudness
  }))

  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Album Loudness Over Time',
          data: chartData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          pointRadius: 5
        }
      ]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'year'
          },
          title: {
            display: true,
            text: 'Release Date'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Average Loudness'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.dataset.label || ''
              const { x, y } = context.raw
              return `${label}: (${x.getFullYear()}, ${y.toFixed(2)})`
            }
          }
        }
      }
    }
  })
}
