#!/bin/bash

sqlite3 tests/db.test.sqlite < exercises/2a.sql | diff - "$(dirname "$0")/2a.txt";
