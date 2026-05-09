#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/5a.sql | diff - "$(dirname "$0")/5a.txt";
