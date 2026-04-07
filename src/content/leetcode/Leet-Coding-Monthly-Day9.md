---
title: "Valid Perfect Square"
date: 2026-03-29
tags: ["LeetCode"]
solution: |
  <?php
  class Solution {
      /**
       * @param Integer $num
       * @return Boolean
       */
      function isPerfectSquare($num) {
          if ($num < 1) return false;
          $left = 1;
          $right = $num;
          while ($left <= $right) {
              $mid = $left + floor(($right - $left) / 2);
              $square = $mid * $mid;
              if ($square == $num) {
                  return true;
              } elseif ($square < $num) {
                  $left = $mid + 1;
              } else {
                  $right = $mid - 1;
              }
          }
          return false;
      }
  }
testCases: |
  $sol = new Solution();
  $cases = [16, 14, 1];
  foreach ($cases as $num) {
      $res = $sol->isPerfectSquare($num) ? "true" : "false";
      echo "Input: $num => Result: $res\n";
  }


---

### Given a positive integer num, write a function which returns True if num is a perfect square else False.
    
### Note: Do not use any built-in library function such as sqrt.

---

### Solution - Simple Solution
