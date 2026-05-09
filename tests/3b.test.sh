#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/3b.sql | diff - "$(dirname "$0")/3b.txt";
