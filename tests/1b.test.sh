#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/1b.sql | diff - "$(dirname "$0")/1b.txt";
