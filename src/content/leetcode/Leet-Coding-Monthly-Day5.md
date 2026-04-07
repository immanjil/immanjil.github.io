---
title: "First Unique Character in a String"
date: 2026-03-29
tags: ["LeetCode"]
solution: |
  <?php
  /**
   * @param String $s
   * @return Integer
   */
  function firstUniqChar($s) {
      if(empty($s)) {
          return -1;
      }
      $sArr = str_split($s);
      $sCount = array_count_values($sArr);
      foreach ($sArr as $index => $char) {
          if ($sCount[$char] === 1) {
              return $index;
          }
      }
      return -1;
  }
testCases: |
  $cases = ["leetcode", "loveleetcode", "aabb"];
  foreach ($cases as $s) {
      $result = firstUniqChar($s);
      echo "Input: '$s' => Result index: $result\n";
  }


---

### Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

---

### Solution - Simple
