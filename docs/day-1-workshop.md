# Day 1 Workshop

> [!NOTE]
>
> Be sure to read `CONTRIBUTING.md` before getting started on the workshops.

## Artists

In the Topsify website, you'll see a link to Artists at the top right. If you
click on it, you'll see... nothing!

This page expects to find a file called `artists.json` in the `reports` folder.

To get it working, write a query in `queries` and use it to create an
`artists.json` report in `reports`.

With Live Server running, the page should automatically refresh to update the UI
with the list of artists.

Try updating the query and regenerating the report to display the artists in
different orders, which different conditions, and different pages.

> [!NOTE]
>
> The pages are pretty static right now. There aren't any buttons for the user
> to change the order and pages by themselves. Not to worry, this is something
> we will cover in a future week of Bootcamp!

## Albums

Similar to the Artists tab, the Albums tab is attempting to read data from
`albums.json`. Create this report so that the data displays on the page.

## Tracks

The Tracks page expects a `tracks.json` report in the reports page! Generate it,
and play around with the query to sequence and paginate the tracks in different
ways.

## Users

Oh no! Someone has deleted all the data in the users table!

Fortunately, their data is backed up in `reports/users.json`. Phew!

Somebody has started manually writing out the SQL statements in
`db/seeds/users.sql` to add them back into the table, but they gave up after
three rows:

```sql
INSERT INTO users VALUES(1,'Sally_Kunde','Sally','Kunde','Sally.Kunde49@yahoo.com','https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/730.jpg','MNkcfO7qfSqzJl5');
INSERT INTO users VALUES(2,'Ebba.Cole','Ebba','Cole','Ebba.Cole@gmail.com','https://avatars.githubusercontent.com/u/54619199','nz5H7F98ukot7yv');
INSERT INTO users VALUES(3,'Gerson_Barton','Gerson','Barton','Gerson.Barton@gmail.com','https://avatars.githubusercontent.com/u/69465068','OTSg4YbbUQIMZ6P');
```

Write a program in any programming language which reads the JSON and generates a
SQL file at `db/seeds/users.sql` which contains all 200 `INSERT` statements.
When you're done, run the SQL file with

```bash
sqlite3 db/db.sqlite "DELETE FROM users;" # empty the table
sqlite3 db/db.sqlite < db/seeds/users.sql # refill it
```

to add the users back into the database.

It might not work straight away - can you fix it? (Hint: SQL doesn't like the
`'` character.)

## Extension

Ready for some reverse engineering? Let's try building a page to display all the
users.

Copy the `albums.html`, `albums.js` and `albums.css` files and rename them to
`users.html`, `users.js` and `users.css`. Go through the files and hack away to
get them displaying a list of users.

Can you add a link to the Users page in the header of the website?
