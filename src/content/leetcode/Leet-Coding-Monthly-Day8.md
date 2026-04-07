---
title: "Check If It Is a Straight Line"
date: 2026-03-29
tags: ["LeetCode"]
solution: |
  <?php
  class Solution {
      /**
       * @param Integer[][] $coordinates
       * @return Boolean
       */
      function checkStraightLine($coordinates) {
          if (count($coordinates) <= 2) return true;
          
          $x0 = $coordinates[0][0];
          $y0 = $coordinates[0][1];
          $x1 = $coordinates[1][0];
          $y1 = $coordinates[1][1];
          
          for ($i = 2; $i < count($coordinates); $i++) {
              $x = $coordinates[$i][0];
              $y = $coordinates[$i][1];
              if (($y1 - $y0) * ($x - $x1) !== ($y - $y1) * ($x1 - $x0)) {
                  return false;
              }
          }
          return true;
      }
  }
testCases: |
  $sol = new Solution();
  $cases = [
      [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]],
      [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]],
      [[0,0],[0,1],[0,5]]
  ];

  foreach ($cases as $index => $coordinates) {
      $res = $sol->checkStraightLine($coordinates) ? "true" : "false";
      echo "Case " . ($index + 1) . ": $res\n";
  }


---

### You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

---

### Solution - Simple Solution
