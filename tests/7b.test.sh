#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/7b.sql

sqlite3 tests/db.test.sqlite "SELECT email FROM users WHERE username = 'Sally_Kunde';" | diff - "$(dirname "$0")/7b.txt";
