---
title: "Cousins in Binary Tree"
date: 2026-03-29
tags: ["LeetCode"]
solution: |
  <?php
  class TreeNode {
      public $val = null;
      public $left = null;
      public $right = null;
      function __construct($val = 0, $left = null, $right = null) {
          $this->val = $val;
          $this->left = $left;
          $this->right = $right;
      }
  }

  class Solution {
      /**
       * @param TreeNode $root
       * @param Integer $x
       * @param Integer $y
       * @return Boolean
       */
      function isCousins($root, $x, $y) {
          if ($this->isSibling($root, $x, $y)) {
              return false;
          }
          return ($this->level($root, $x, 1) === $this->level($root, $y, 1));
      }

      function isSibling($root, $x, $y) {
          if (empty($root)) {
              return false;
          }
          if ($root->left && $root->right) {
              if (($root->left->val === $x && $root->right->val === $y) ||
                  ($root->left->val === $y && $root->right->val === $x)) {
                  return true;
              }
          }
          return ($this->isSibling($root->left, $x, $y) ||
                  $this->isSibling($root->right, $x, $y));
      }

      function level($root, $val, $level) {
          if (empty($root)) {
              return 0;
          }
          if ($root->val === $val) {
              return $level;
          }
          $l = $this->level($root->left, $val, $level + 1);
          if ($l !== 0) {
              return $l;
          }
          return $this->level($root->right, $val, $level + 1);
      }
  }
testCases: |
  $sol = new Solution();

  // Case 1: [1,2,3,4], x=4, y=3 => false
  $root1 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
  echo "Case 1 (4,3): " . ($sol->isCousins($root1, 4, 3) ? "true" : "false") . "\n";

  // Case 2: [1,2,3,null,4,null,5], x=5, y=4 => true
  $root2 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3, null, new TreeNode(5)));
  echo "Case 2 (5,4): " . ($sol->isCousins($root2, 5, 4) ? "true" : "false") . "\n";

  // Case 3: [1,2,3,null,4], x=2, y=3 => false
  $root3 = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3));
  echo "Case 3 (2,3): " . ($sol->isCousins($root3, 2, 3) ? "true" : "false") . "\n";


---

### In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
    
### Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
    
### We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
    
### Return true if and only if the nodes corresponding to the values x and y are cousins.

---

### Solution - Using Depth first
### Depth first algorithm, help taken from geeksforgeeks but implemented in PHP where normally its in C/Java/Python/C#
