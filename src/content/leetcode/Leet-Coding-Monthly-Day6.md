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
      $count = count($nums) / 2;
      $numsCount = array_count_values($nums);
      foreach ($numsCount as $k => $v) {
          if ($v > $count) {
              return $k;
          }
      }
      return -1;
  }
testCases: |
  $cases = [
      [3, 2, 3],
      [2, 2, 1, 1, 1, 2, 2],
      [1, 1, 1, 2, 2, 2, 2]
  ];
  foreach ($cases as $nums) {
      $result = majorityElement($nums);
      echo "Input: [" . implode(",", $nums) . "] => Majority: $result\n";
  }


---

### Given an array of size n, find the majority element. The majority element is the element that appears more than âŒŠ n/2 âŒ‹ times.
    
### You may assume that the array is non-empty and the majority element always exist in the array.

---

### Solution - Simple
