#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/1a.sql | diff - "$(dirname "$0")/1a.txt";
