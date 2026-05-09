#!/bin/bash

if [ $# -eq 0 ];
  then exercises="1a 1b 2a 2b 3a 3b 4a 4b 5a 5b 6a 6b 7a 7b 8a 8b 9a 9b";
  else exercises="$@";
fi

echo "Testing exercise(s) $exercises";

overall_result=0
for arg in $exercises;
do
  bash -c "./tests/setup.sh" &> /dev/null;
  bash -c "./tests/$arg.test.sh" &> /dev/null;
  test_result=$?;
  echo Exercise $arg $([[ $test_result -eq 0 ]] && echo "Pass ✅" || echo "Fail ❌");
  overall_result=$(($overall_result|$test_result))
done

exit $overall_result
