document.addEventListener('DOMContentLoaded', function () {
  const artistsGrid = document.getElementById('artistsGrid')

  if (artistsGrid) {
    fetch('/reports/artists.json')
      .then(response => response.json())
      .then(data => {
        displayArtists(artistsGrid, data)
      })
  }
})

function displayArtists(container, artists) {
  artists.forEach(artist => {
    const artistCard = document.createElement('div')
    artistCard.className = 'artist-card'

    const artistName = document.createElement('h3')
    artistName.className = 'artist-card__name'
    artistName.textContent = artist.name

    const artistLink = document.createElement('a')
    artistLink.className = 'artist-card__link'
    artistLink.href = artist.url
    artistLink.textContent = 'Listen on Spotify'
    artistLink.target = '_blank'

    artistCard.appendChild(artistName)
    artistCard.appendChild(artistLink)
    container.appendChild(artistCard)
  })
}
