# Workshop

For today's workshop, we'll be providing the data required for graphs and charts
to work on the Topsify website. Follow the steps below to generate the necessary
reports and visualise the data.

> [!TIP]
>
> It is possible to join more than two tables together using multiple
> `INNER JOIN` statements. There's an
> [example here](https://tech-docs.corndel.com/sql/many-to-many.html#complex-queries)
> to demonstrate how this works.

## Chart 1: Most explicit artists

Visiting `/charts/1.html` should show a bar chart showing the count of explicit
tracks by each artist, ordered by explicit track count. It should only show
artists who have at least one explicit track.

This chart expects the data to be available in `reports/chart-1.json`. The JSON
should look like this:

```json
[
  {
    "artist_name": "Taylor Swift",
    "explicit_track_count": 999
  }
  // ... more artists
]
```

> [!TIP]
>
> Use the `AS` keyword to redefine the key in your results. For example,
>
> ```sql
> .mode json
> SELECT artists.name AS artist_name
> ```

Write the query, generate the required report and visit the page to make sure it
works.

> [!NOTE]
>
> Remember to put `.mode json` at the top of your `.sql` file to get `sqlite3`
> to create JSON reports.

## Chart 2: Album characteristics

Visiting `/charts/2.html` should show a radar chart for each album summarising
its average characteristics. The axes of the radar chart are

- danceability
- energy
- speechiness
- acousticness
- liveness

Generate a JSON report that looks like this:

```json
[
  {
    "artist_name": "Deftones",
    "album_name": "White Pony",
    "average_danceability": 0.5,
    "average_energy": 0.5,
    "average_speechiness": 0.5,
    "average_acousticness": 0.5,
    "average_liveness": 0.5
  }
  // ... more albums
]
```

Visit `/charts/2.html` to see the output.

## Chart 3: Loudness over time

Are albums getting louder?

Write a query which generates `reports/chart-3.json` containing entries of the
form:

```json
[
  {
    "album_name": "Album 1",
    "average_loudness": -5.0,
    "release_date": "2010-01-01"
  },
  {
    "album_name": "Album 2",
    "average_loudness": -4.5,
    "release_date": "2011-01-01"
  }
  // ... more albums
]
```

## Extension

Remember the Albums page, at `/albums.html`? Well, it isn't great. The Albums
pages just shows the `artist_id`. It would be much better if it showed the
actual artist name there.

See if you can improve the `albums.json` report and modify the `albums.js` to
show the name of the artist, not just the id.

Perhaps you could do something similar for the `album_id` in the Tracks page at
`/tracks.html`, too?
