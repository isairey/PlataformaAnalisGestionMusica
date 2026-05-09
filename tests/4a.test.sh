#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/4a.sql | diff - "$(dirname "$0")/4a.txt";
