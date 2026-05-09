# Contributing

## Website

With the [Live Server extension](vscode:extension/ritwickdey.LiveServer)
installed, you can hit `Ctrl + Shift + P` to open the command palette. Start
typing "live server" and you should see options to start and stop the server.

This should open your browser automatically, but if not, you should be able to
visit (http://127.0.0.1:5500/index.html)[http://127.0.0.1:5500/index.html] in
your browser to see the website.

## Resetting the database

If you mess up the database and you want to reset it to its original state, run

```bash
sqlite3 db/db.sqlite < db/reset.sql
```

Be aware that any migrations and seeds you have written will need to be
reapplied in the correct order.

## The features table

You can head to Spotify's
[API documentation](https://developer.spotify.com/documentation/web-api/reference/get-audio-features)
for an explanation of the columns in the `features` table.

## Creating reports

Open `queries/example.sql` and put the line

```sql
.mode json
```

at the top of the file. This makes `sqlite3` output the results as JSON.

Now, run

```bash
sqlite3 db/db.sqlite < queries/example.sql > reports/example.json
```

and open `reports/example.json`. Your query results are now saved in a JSON
file!

## Schema

Here's a glance at how the database is set up.

```mermaid
erDiagram
    users {
        INTEGER id PK "Primary Key"
        TEXT username "Unique"
        TEXT first_name
        TEXT last_name
        TEXT email "Unique"
        TEXT avatar
        TEXT password "Hashed"
    }

    artists {
        TEXT id PK "Primary Key"
        TEXT name
        TEXT url
    }

    albums {
        TEXT id PK "Primary Key"
        TEXT name
        TEXT artist_id FK "Foreign Key to artists"
        TEXT release_date
        TEXT image_url
    }

    tracks {
        TEXT id PK "Primary Key"
        TEXT album_id FK "Foreign Key to albums"
        TEXT name
        BOOLEAN explicit
        TEXT preview_url
        INTEGER disc_number
        INTEGER track_number
        REAL duration_ms
    }

    features {
        TEXT track_id PK "Primary Key, FK to tracks"
        REAL danceability
        REAL energy
        INTEGER key
        REAL loudness
        INTEGER mode
        REAL speechiness
        REAL acousticness
        REAL instrumentalness
        REAL liveness
        REAL valence
        REAL tempo
        INTEGER time_signature
    }

    artists ||--o{ albums : "has"
    albums ||--o{ tracks : "contains"
    tracks ||--|| features : "described by"
```
