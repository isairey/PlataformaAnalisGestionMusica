#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/3a.sql | diff - "$(dirname "$0")/3a.txt";
