#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/2b.sql | diff - "$(dirname "$0")/2b.txt";
