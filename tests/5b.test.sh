#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/5b.sql | diff - "$(dirname "$0")/5b.txt";
