---
title: "First Bad Version"
date: 2026-03-29
tags: ["LeetCode"]
solution: |
  <?php
  /**
   * @param Integer $n
   * @return Integer
   */
  function isBadVersion($n) {
      // Mock API for testing
      global $firstBad;
      return $n >= $firstBad;
  }

  function firstBadVersion($n) {
      $left = 1;
      $right = $n;
      while ($left < $right) {
          $mid = floor($left + ($right - $left) / 2);
          if (isBadVersion($mid)) {
              $right = $mid;
          } else {
              $left = $mid + 1;
          }
      }
      return $left;
  }
testCases: |
  $testCases = [
      ['n' => 5, 'bad' => 4],
      ['n' => 1, 'bad' => 1],
      ['n' => 10, 'bad' => 7]
  ];

  foreach ($testCases as $case) {
      $GLOBALS['firstBad'] = $case['bad'];
      $result = firstBadVersion($case['n']);
      echo "Input: n = {$case['n']}, bad = {$case['bad']}\nOutput: $result\n\n";
  }
---

---

### You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
    
### Suppose you have  `n`  versions  `[1, 2, ..., n]`  and you want to find out the first bad one, which causes all the following ones to be bad.
    
### You are given an API  `bool isBadVersion(version)`  which will return whether  `version`  is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

---

### Solution - Simple Binary Search
  