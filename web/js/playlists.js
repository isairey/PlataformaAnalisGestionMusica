document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.getElementById('playlistDropdown')
  const tracksContainer = document.getElementById('playlistTracks')

  // Load playlists and populate dropdown
  fetch('/reports/playlists.json')
    .then(response => response.json())
    .then(playlists => {
      playlists.forEach(playlist => {
        const option = document.createElement('option')
        option.value = playlist.id
        option.textContent = `${playlist.name} (by ${playlist.username})`
        dropdown.appendChild(option)
      })
    })

  // Handle playlist selection
  dropdown.addEventListener('change', function () {
    const playlistId = this.value
    if (!playlistId) {
      tracksContainer.innerHTML = ''
      return
    }

    // Fetch tracks for selected playlist
    fetch(`/reports/playlist-${playlistId}.json`)
      .then(response => response.json())
      .then(tracks => {
        displayTracks(tracksContainer, tracks)
      })
      .catch(error => {
        console.error('Error loading playlist tracks:', error)
        tracksContainer.innerHTML = '<p>Error loading tracks</p>'
      })
  })
})

function displayTracks(container, tracks) {
  container.innerHTML = ''

  if (tracks.length === 0) {
    container.innerHTML = '<p>This playlist is empty</p>'
    return
  }

  tracks.forEach(track => {
    const trackCard = document.createElement('div')
    trackCard.className = 'track-card'

    const albumImage = document.createElement('img')
    albumImage.className = 'track-card__image'
    albumImage.src = track.image_url
    albumImage.alt = track.album_name

    const trackInfo = document.createElement('div')
    trackInfo.className = 'track-card__info'

    const trackName = document.createElement('h3')
    trackName.className = 'track-card__name'
    trackName.textContent = track.name

    const artistName = document.createElement('p')
    artistName.className = 'track-card__artist'
    artistName.textContent = track.artist_name

    const albumName = document.createElement('p')
    albumName.className = 'track-card__album'
    albumName.textContent = track.album_name

    const duration = document.createElement('p')
    duration.className = 'track-card__duration'
    const minutes = Math.floor(track.duration_ms / 60000)
    const seconds = Math.floor((track.duration_ms % 60000) / 1000)
    duration.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`

    trackInfo.appendChild(trackName)
    trackInfo.appendChild(artistName)
    trackInfo.appendChild(albumName)
    trackInfo.appendChild(duration)

    trackCard.appendChild(albumImage)
    trackCard.appendChild(trackInfo)
    container.appendChild(trackCard)
  })
}
