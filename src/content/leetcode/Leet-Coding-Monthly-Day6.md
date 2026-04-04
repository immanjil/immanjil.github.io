---
title: "Majority Element"
date: 2026-03-29
tags: ["LeetCode"]
solution: |
  <?php
      /**
       * @param Integer[] $nums
       * @return Integer
       */
      function majorityElement($nums) {
          $count = count($nums)/2;
          $numsCount = array_count_values ($nums);
          foreach ($numsCount as $k=>$v) {
              if ($v > $count) {
                  return $k;
              }
          }
          return $sol;
      }
  
      // Test cases to be run $testCases = [5, 100, 444]; foreach
      $testCases = [[2,2,1,1,1,2,2], [3,2,3]];
      foreach ($testCases as $testCase) {
          $sol = majorityElement($testCase);
          echo "Input:" . PHP_EOL;
          var_dump($testCase) . PHP_EOL;
          echo "Solution: $sol" . PHP_EOL;
      }
---

---

### Given an array of size n, find the majority element. The majority element is the element that appears more than âŒŠ n/2 âŒ‹ times.
    
### You may assume that the array is non-empty and the majority element always exist in the array.

---

### Solution - Simple
