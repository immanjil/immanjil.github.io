---
title: "Flood Fill"
date: 2026-03-29
tags: ["LeetCode"]
solution: |
  <?php
  /**
   * @param Integer[][] $image
   * @param Integer $sr
   * @param Integer $sc
   * @param Integer $newColor
   * @return Integer[][]
   */
  function floodFill($image, $sr, $sc, $newColor) {
      $oldColor = $image[$sr][$sc];
      if ($oldColor === $newColor) return $image;
      
      $rows = count($image);
      $cols = count($image[0]);
      $queue = [[$sr, $sc]];
      $image[$sr][$sc] = $newColor;
      
      while (!empty($queue)) {
          [$r, $c] = array_shift($queue);
          
          $directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
          foreach ($directions as [$dr, $dc]) {
              $nr = $r + $dr;
              $nc = $c + $dc;
              
              if ($nr >= 0 && $nr < $rows && $nc >= 0 && $nc < $cols && $image[$nr][$nc] === $oldColor) {
                  $image[$nr][$nc] = $newColor;
                  $queue[] = [$nr, $nc];
              }
          }
      }
      return $image;
  }
testCases: |
  $cases = [
      ['image' => [[1,1,1],[1,1,0],[1,0,1]], 'sr' => 1, 'sc' => 1, 'newColor' => 2],
      ['image' => [[0,0,0],[0,0,0]], 'sr' => 0, 'sc' => 0, 'newColor' => 2],
      ['image' => [[1,1,1],[1,1,0],[1,0,1]], 'sr' => 1, 'sc' => 1, 'newColor' => 1]
  ];

  foreach ($cases as $index => $case) {
      $res = floodFill($case['image'], $case['sr'], $case['sc'], $case['newColor']);
      echo "Case " . ($index + 1) . " result:\n";
      foreach ($res as $row) {
          echo "[" . implode(",", $row) . "]\n";
      }
      echo "\n";
  }


---

### An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).
    
### Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.
    
### To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.
    
### At the end, return the modified image.

---

### Solution - Using Breadth First Search
### Breadth first algorithm, help taken from other solutions but implemented in PHP but Queue is not primary PHP package, so could not run on LeetCode

>     class Solution {
> 
>     /**
>      * @param Integer[][] $image
>      * @param Integer $sr
>      * @param Integer $sc
>      * @param Integer $newColor
>      * @return Integer[][]
>      */
>     function floodFill($image, $sr, $sc, $newColor) {
>         // Base cases 
>         if ($sr < 0 || $sc < 0 || ($image[$sr][$sc] == $newColor)) 
>             return $image; 
> 
>         // Replace the color at (x, y) 
>         $image[$sr][$sc] = $newColor; 
> 
>         $queue = new \Ds\Queue();
>         $queue->allocate([$sr, $sc]);
>         var_dump($queue);
>         
>         while (!$queue->isEmpty()){
>             [$r, $c] = $queue->pop();
>             if (
>                 (0 <= $r && $r< count($image)) 
>                 && (0 <= $c && $c< count($image[0]))) {
>                 $image[$r][$c] = $newColor;
>                 $queue->push([r+1, c]);
>                 $queue->push([r-1, c]);
>                 $queue->push([r, c+1]);
>                 $queue->push([r, c-1]);
>             }
>         }
>         return $image;        
>       }
>     }

---

### Solution - Using Breadth First Search implemented on Python3
