---
title: "Find the Town Judge"
date: 2026-03-29
tags: ["LeetCode"]
solution: |
  <?php
  class Solution {
      /**
       * @param Integer $n
       * @param Integer[][] $trust
       * @return Integer
       */
      function findJudge($n, $trust) {
          if ($n === 1 && empty($trust)) return 1;
          
          $trustCounts = array_fill(1, $n, 0);
          
          foreach ($trust as $t) {
              $trustCounts[$t[0]]--;
              $trustCounts[$t[1]]++;
          }
          
          foreach ($trustCounts as $person => $score) {
              if ($score === $n - 1) {
                  return $person;
              }
          }
          
          return -1;
      }
  }
testCases: |
  $sol = new Solution();
  $cases = [
      ['n' => 2, 'trust' => [[1, 2]]],
      ['n' => 3, 'trust' => [[1, 3], [2, 3]]],
      ['n' => 3, 'trust' => [[1, 3], [2, 3], [3, 1]]]
  ];

  foreach ($cases as $index => $case) {
      $res = $sol->findJudge($case['n'], $case['trust']);
      echo "Case " . ($index + 1) . ": Judge is person $res\n";
  }
---

---

### In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

### If the town judge exists, then:
1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.

### You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

### Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

---

### Solution - Counting Trusts
We use an array to track the "trust score" of each person. If a person trusts someone, their score decreases. If they are trusted by someone, their score increases. The judge will have a score of `n - 1` (trusted by everyone else, trusts no one).
