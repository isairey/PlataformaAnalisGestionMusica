# Day 1 Exercises

Today's exercises focus on writing queries to get data out of the database and
save them into .txt files.

> [!IMPORTANT]
>
> Don't include any `.mode` at the top of your `.sql` files for the exercises -
> the tests are designed to work with the raw output of the query.

## Exercise 1: Simple selects

- [ ] Read the docs on
      [select queries](https://tech-docs.corndel.com/sql/select-queries.html)

- [ ] Open `exercises/1a.sql` and type the SQL needed to solve the exercise.

- [ ] To create the report, run

  ```bash
  sqlite3 db/db.sqlite < exercises/1a.sql > reports/1a.txt
  ```

- [ ] To run the tests, run

  ```bash
  ./test.sh
  ```

- [ ] Commit and push!

- [ ] Read the docs on
      [selecting with conditions](https://tech-docs.corndel.com/sql/select-queries.html)

- [ ] Complete `exercises/1b.sql` in the same way we did `1a.sql`

## Exercise 2: Ordering results

- [ ] Read the docs on
      [ordering results](https://tech-docs.corndel.com/sql/ordering-results.html)

- [ ] Complete `exercises/2a.sql`

- [ ] Complete `exercises/2b.sql`

## Exercise 3: Paginating results

- [ ] Read the docs on
      [paginating results](https://tech-docs.corndel.com/sql/limit-offset.html)

- [ ] Complete `exercises/3a.sql`

- [ ] Complete `exercises/3b.sql`
