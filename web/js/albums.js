document.addEventListener('DOMContentLoaded', function () {
  const albumsGrid = document.getElementById('albumsGrid')

  if (albumsGrid) {
    fetch('/reports/albums.json')
      .then(response => response.json())
      .then(data => {
        displayAlbums(albumsGrid, data)
      })
  }
})

function displayAlbums(container, albums) {
  albums.forEach(album => {
    const albumCard = document.createElement('div')
    albumCard.className = 'album-card'

    const albumImage = document.createElement('img')
    albumImage.className = 'album-card__image'
    albumImage.src = album.image_url
    albumImage.alt = album.name

    const albumName = document.createElement('h3')
    albumName.className = 'album-card__name'
    albumName.textContent = album.name

    const albumArtist = document.createElement('p')
    albumArtist.className = 'album-card__artist'
    albumArtist.textContent = `Artist ID: ${album.artist_id}`

    const albumReleaseDate = document.createElement('p')
    albumReleaseDate.className = 'album-card__release-date'
    albumReleaseDate.textContent = `Release Date: ${album.release_date}`

    albumCard.appendChild(albumImage)
    albumCard.appendChild(albumName)
    albumCard.appendChild(albumArtist)
    albumCard.appendChild(albumReleaseDate)
    container.appendChild(albumCard)
  })
}
