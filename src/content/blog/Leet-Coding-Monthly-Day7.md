# Cousins in Binary Tree

---

### In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
    
### Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
    
### We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
    
### Return true if and only if the nodes corresponding to the values x and y are cousins.

---

### Solution - Using Depth first
### Depth first algorithm, help taken from geeksforgeeks but implemented in PHP where normally its in C/Java/Python/C#

>     /*** Definition for a binary tree node.
>     *      class TreeNode {
>     *      public $val = null;
>      *     public $left = null;  
>      *     public $right = null;
>      *     function __construct($val = 0, $left = null, $right = null) {
>      *         $this->val = $val;  *         $this->left = $left; 
>      *         $this->right = $right;
>       *     }
>       * }
>       */
> 
>     class Solution {
> 
>     /**
>      * @param TreeNode $root
>      * @param Integer $x
>      * @param Integer $y
>      * @return Boolean
>      */
> 
>     /**
>      * Reverse true if cousins.
>      *
>      * @param  object  $root
>      * @param  int  $x
>      * @param  int  $y
>      * @return bool
>      */
>     function isCousins($root, $x, $y) {
>         if($this->isSibling($root, $x, $y)) {
>             return false;
>         }
>         if (($this->level($root,$x,1) === $this->level($root, $y, 1)))  {
>             var_dump($a);
>             var_dump($b);
>             return true;
>         } else {
>             return false;
>         }
>     }
>     
>     /**
>      * Reverse true if cousins.
>      *
>      * @param  object  $root
>      * @param  int  $x
>      * @param  int  $y
>      * @return bool
>      */
>     function isSibling($root, $x, $y) {
>         if (empty($root)) {
>             echo "Not Siblings $x & $y" . PHP_EOL;
>             return false;
>         }
>         if (($root->left->val === $y && $root->right->val === $x) ||
>             ($root->left->val === $x && $root->right->val === $y)) {
>             echo "Siblings" . PHP_EOL;
>             return true;
>         }
>         return ($this->isSibling($root->left, $x, $y) ||
>                 $this->isSibling($root->right, $x, $y)
>         );
>     }
> 
>     /**
>      * Recursively finds the level for given $val
>      * All values are unique, so cannot be siblings
>      * 
>      * @param  object  $root
>      * @param  int  $val
>      * @param  int  $level
>      * @return int
>      */
>     function level($root, $val, $level) {
>         echo "Checking Level $level" . PHP_EOL;
> 
>         if(empty($root)) {
>             return 0;
>         }
>         if($root->val === $val) {
>             return $level;
>         }
>         
>         $l = $this->level($root->left, $val, $level+1);
>         if($l !== 0) {
>             return $l;
>         }
>         
>         return $this->level($root->right, $val, $level+1);
>     }
> 
>     }


