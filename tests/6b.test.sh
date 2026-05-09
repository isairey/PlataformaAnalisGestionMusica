#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/6b.sql | diff - "$(dirname "$0")/6b.txt";
