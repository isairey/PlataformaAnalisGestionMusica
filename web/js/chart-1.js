document.addEventListener('DOMContentLoaded', async () => {
  const ctx = document.getElementById('explicitTracksChart').getContext('2d')

  try {
    const data = await fetchChartData('/reports/chart-1.json')
    createBarChart(ctx, data)
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

function createBarChart(ctx, data) {
  const labels = data.map(item => item.artist_name)
  const values = data.map(item => item.explicit_track_count)

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Explicit Track Count',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}
