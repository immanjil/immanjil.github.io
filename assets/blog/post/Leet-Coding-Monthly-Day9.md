# Valid Perfect Square

---

### Given a positive integer num, write a function which returns True if num is a perfect square else False.
    
### Note: Do not use any built-in library function such as sqrt.

---

### Solution - Simple Solution

> class Solution {
> 
>     /**
>      * @param Integer $num
>      * @return Boolean
>      */
>     function isPerfectSquare($num) {
>         if(in_array($num,[0, 2,3])) {
>             return false;
>         }
>         if(in_array($num,[1])) {
>             return true;
>         }
>         $left = 1;
>         $right = $num;
>         while ($left <= $right) {
> 
>             $mid = $left + floor(($right - $left) / 2);
>             var_dump($mid);
>             if ($mid * $mid == $num) {
>                 return true;
>             } else if (($mid * $mid < $num)) {
>                 $left = $mid +1;
>             } else {
>                 $right = $mid - 1;
>             }
>         }
>         
>         return false;
>       }
>     }
