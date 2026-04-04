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
            $size = count($nums);
            foreach($nums as $index=>$num) {
                if($size === $index+1) {
                    return [0,0];
                }
                if($num + $nums[$index+1] === $target) {
                    return [$index, $index+1];
                }
            }
            return [0,0];
        }
    }
---

---

### Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

### You may assume that each input would have exactly one solution, and you may not use the same element twice.

### You can return the answer in any order.

### https://leetcode.com/problems/two-sum/
---

### Solution
  
