#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/4b.sql | diff - "$(dirname "$0")/4b.txt";
