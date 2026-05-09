document.addEventListener('DOMContentLoaded', function () {
  fetch('/reports/tracks.json')
    .then(response => response.json())
    .then(data => {
      populateTracksTable(data)
      initializeDataTable()
    })
})

function populateTracksTable(tracks) {
  const tableBody = document.getElementById('tracksTableBody')
  tracks.forEach(track => {
    const row = document.createElement('tr')

    const trackName = document.createElement('td')
    trackName.textContent = track.name
    row.appendChild(trackName)

    const albumId = document.createElement('td')
    albumId.textContent = track.album_id
    row.appendChild(albumId)

    const explicit = document.createElement('td')
    explicit.textContent = track.explicit ? 'Yes' : 'No'
    row.appendChild(explicit)

    const preview = document.createElement('td')
    const previewLink = document.createElement('a')
    previewLink.href = track.preview_url
    previewLink.textContent = 'Preview'
    previewLink.target = '_blank'
    preview.appendChild(previewLink)
    row.appendChild(preview)

    const discNumber = document.createElement('td')
    discNumber.textContent = track.disc_number
    row.appendChild(discNumber)

    const trackNumber = document.createElement('td')
    trackNumber.textContent = track.track_number
    row.appendChild(trackNumber)

    const duration = document.createElement('td')
    duration.textContent = track.duration_ms
    row.appendChild(duration)

    tableBody.appendChild(row)
  })
}
