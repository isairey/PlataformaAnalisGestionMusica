# Day 3 Workshop

There's an important feature we need to get off the ground: playlists.

```mermaid
erDiagram
  users {
      integer id PK "Primary Key"
      text username "Unique"
      text first_name
      text last_name
      text email "Unique"
      text avatar
      text password
  }

  playlists {
      integer id PK "Primary Key"
      integer user_id FK "Foreign Key"
      text name
  }

  playlist_tracks {
      integer playlist_id FK "Foreign Key"
      text track_id FK "Foreign Key"
  }

  tracks {
      text id PK "Primary Key"
      text album_id FK "Foreign Key"
      text name
      boolean explicit
      text preview_url
      integer disc_number
      integer track_number
      real duration_ms
  }

  users ||--o{ playlists : "owns"
  playlists ||--o{ playlist_tracks : "contains"
  tracks ||--o{ playlist_tracks : "included_in"
```

## Migrations

Create migration files in the `db/migrations/` directory to build the tables
shown in the ER diagram above.

You'll need:
- `001_create_playlists.sql` - Creates the `playlists` table
- `002_create_playlist_tracks.sql` - Creates the junction table for the
  many-to-many relationship

> [!TIP]
>
> Refer to the
> [creating tables](https://tech-docs.corndel.com/sql/creating-tables.html)
> docs for `CREATE TABLE` syntax and foreign key constraints.

Run your migrations in order:

```bash
sqlite3 db/db.sqlite < db/migrations/001_create_playlists.sql
sqlite3 db/db.sqlite < db/migrations/002_create_playlist_tracks.sql
```

## Seed data

Create seed files in `db/seeds/` to populate your new tables with test data.
You'll need at least 3-5 playlists with multiple tracks in each.

> [!TIP]
>
> - Make sure `user_id` values reference existing users
> - You can find valid track IDs with: `sqlite3 db/db.sqlite "SELECT id FROM tracks LIMIT 20;"`
> - Seed playlists before playlist_tracks (order matters!)

Run your seeds after the migrations:

```bash
sqlite3 db/db.sqlite < db/seeds/playlists.sql
sqlite3 db/db.sqlite < db/seeds/playlist_tracks.sql
```

## Playlists page

Now that you've created the schema and seeded the data, let's generate the
reports needed for the playlists UI!

A playlists page has been created at `web/playlists.html`. It has a dropdown to
select playlists and will display the tracks in each playlist. Once you generate
the required JSON reports, you should be able to select playlists from the dropdown 
and see their tracks.

To make this work, you'll need to:

1. Write a query to get all playlists and generate `reports/playlists.json`

   ```bash
   sqlite3 db/db.sqlite < queries/playlists.sql > reports/playlists.json
   ```

   > [!NOTE]
   >
   > Remember to put `.mode json` at the top of your `.sql` file to get `sqlite3`
   > to create JSON reports.

   > [!TIP]
   >
   > The playlists page expects each playlist object to include the `username`
   > of the user who created it. You'll need to JOIN with the users table!

2. For each playlist, write a query that JOINs across the many-to-many
   relationship to get all tracks in that playlist. Generate JSON files like
   `reports/playlist-1.json`, `reports/playlist-2.json`, etc.

   > [!TIP]
   >
   > You'll need to JOIN multiple tables: `playlist_tracks` → `tracks` →
   > `albums` → `artists` to get all the information needed to display each
   > track nicely (track name, artist name, album name, album image, duration).

With Live Server running, visit `/playlists.html` and you should be able to
select different playlists and see their tracks displayed!

## Stretch challenges

Once you have the basic playlists page working, try extending it with some of
these features:

- Display the user information (username, name) for who created each playlist
- Show album artwork for each track in the playlist
- Calculate and display the total duration of the playlist
- Add the ability to order tracks by different criteria (name, duration, etc.)
- Show playlist statistics (number of tracks, total duration, most common
  artist)
- Create multiple playlists with different themes (e.g., "High Energy Workout",
  "Chill Acoustic", "90s Throwback") and seed them with appropriate tracks
