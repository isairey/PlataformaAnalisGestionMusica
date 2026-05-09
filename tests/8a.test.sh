#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/8a.sql

sqlite3 tests/db.test.sqlite "SELECT COUNT(*) FROM artists;" | diff - "$(dirname "$0")/8a.txt";
