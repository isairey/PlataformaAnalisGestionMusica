#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/7a.sql

sqlite3 tests/db.test.sqlite "SELECT username, email, password FROM users WHERE first_name IN ('Vincenza', 'Lionel');" | diff - "$(dirname "$0")/7a.txt";
