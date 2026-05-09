#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/8b.sql

sqlite3 tests/db.test.sqlite "SELECT COUNT(*) FROM albums;" | diff - "$(dirname "$0")/8b.txt";
