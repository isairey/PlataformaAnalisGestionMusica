#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/6a.sql | diff - "$(dirname "$0")/6a.txt";
