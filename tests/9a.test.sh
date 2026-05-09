#!/bin/bash

sqlite3 tests/db.test.sqlite "DROP TABLE IF EXISTS genres;"

sqlite3 tests/db.test.sqlite < exercises/9a.sql

sqlite3 tests/db.test.sqlite "INSERT INTO genres (name) VALUES ('Pop'), ('Rock'), ('Classical'), ('Hip Hop');"

sqlite3 tests/db.test.sqlite "SELECT * FROM genres;" | diff - "$(dirname "$0")/9a.txt";
