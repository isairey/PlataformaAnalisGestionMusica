#!/bin/bash

sqlite3 tests/db.test.sqlite "DROP TABLE IF EXISTS genres;"
sqlite3 tests/db.test.sqlite "DROP TABLE IF EXISTS track_genres;"

sqlite3 tests/db.test.sqlite < exercises/9a.sql
sqlite3 tests/db.test.sqlite < exercises/9b.sql

sqlite3 tests/db.test.sqlite "INSERT INTO genres (name) VALUES ('Pop'), ('Rock'), ('Classical'), ('Hip Hop');"
sqlite3 tests/db.test.sqlite "INSERT INTO track_genres (track_id, genre_id) VALUES ('1MpCaOeUWhox2Fgigbe1cL', 1), ('1MpCaOeUWhox2Fgigbe1cL', 2), ('0mKGwFMHzTprtS2vpR3b6s', 1), ('0mKGwFMHzTprtS2vpR3b6s', 2);"

sqlite3 tests/db.test.sqlite "SELECT * FROM track_genres;" | diff - "$(dirname "$0")/9b.txt";
