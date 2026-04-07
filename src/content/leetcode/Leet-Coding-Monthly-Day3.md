---
title: "Ransom Note"
date: 2026-03-29
tags: ["LeetCode"]
solution: |
  <?php
  /**
   * @param String $ransomNote
   * @param String $magazine
   * @return Boolean
   */
  function canConstruct($ransomNote, $magazine) {
      if(empty($ransomNote)) {
          return true;
      }
      $ransomNoteArr = str_split($ransomNote);
      $magazineArr = str_split($magazine);
      $rC = array_count_values($ransomNoteArr);
      $rM = array_count_values($magazineArr);
      foreach ($rC as $k=>$v) {
          if(!isset($rM[$k]) || $rM[$k] < $v) {
              return false;
          }
      }
      return true;
  }
testCases: |
  $cases = [
      ["a", "b"],
      ["aa", "ab"],
      ["aa", "aab"]
  ];

  foreach ($cases as $case) {
      $result = canConstruct($case[0], $case[1]) ? "true" : "false";
      echo "Note: '{$case[0]}', Magazine: '{$case[1]}' => Result: $result\n";
  }


---

### Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

### Each letter in the magazine string can only be used once in your ransom note.

### Note: You may assume that both strings contain only lowercase letters.

---

### Solution - Simple
  