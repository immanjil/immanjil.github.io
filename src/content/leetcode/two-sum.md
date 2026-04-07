---
title: "Two Sum"
date: 2026-03-29
priority: 1
tags: ["LeetCode"]
solution: |
  <?php
  class Solution {
      /**
       * @param Integer[] $nums
       * @param Integer $target
       * @return Integer[]
       */
      function twoSum($nums, $target) {
          $map = [];
          foreach ($nums as $index => $num) {
              $complement = $target - $num;
              if (array_key_exists($complement, $map)) {
                  return [$map[$complement], $index];
              }
              $map[$num] = $index;
          }
          return [];
      }
  }
solutions:
  - label: "Brute Force"
    code: |
      <?php
      class Solution {
          /**
           * @param Integer[] $nums
           * @param Integer $target
           * @return Integer[]
           */
          function twoSum($nums, $target) {
              $n = count($nums);
              for ($i = 0; $i < $n; $i++) {
                  for ($j = $i + 1; $j < $n; $j++) {
                      if ($nums[$i] + $nums[$j] === $target) {
                          return [$i, $j];
                      }
                  }
              }
              return [];
          }
      }
      ?>
  - label: "Two-Pointer"
    code: |
      <?php
      class Solution {
          /**
           * Note: This approach requires sorting, so it returns values, 
           * not original indices, unless we track them.
           */
          function twoSum($nums, $target) {
              sort($nums);
              $left = 0;
              $right = count($nums) - 1;
              while ($left < $right) {
                  $sum = $nums[$left] + $nums[$right];
                  if ($sum === $target) return [$nums[$left], $nums[$right]];
                  if ($sum < $target) $left++;
                  else $right--;
              }
              return [];
          }
      }
      ?>
testCases: |
  $sol = new Solution();
  $cases = [
      ['nums' => [2, 7, 11, 15], 'target' => 9],
      ['nums' => [3, 2, 4], 'target' => 6],
      ['nums' => [3, 3], 'target' => 6]
  ];

  foreach ($cases as $index => $case) {
      $res = $sol->twoSum($case['nums'], $case['target']);
      echo "Case " . ($index + 1) . ": [" . implode(",", $res) . "]\n";
  }


---

### Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

### You may assume that each input would have exactly one solution, and you may not use the same element twice.

### You can return the answer in any order.

### https://leetcode.com/problems/two-sum/  
