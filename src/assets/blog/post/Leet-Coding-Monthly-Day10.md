# Find the Town Judge

---

### In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.
    
### If the town judge exists, then:
    
### The town judge trusts nobody.
### Everybody (except for the town judge) trusts the town judge.
### There is exactly one person that satisfies properties 1 and 2.
### You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
    
### If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

---

### Solution - Simple Search

>     class Solution {
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
>         $i = 1;
>         $result = 0;
>         while($i < $num) {
>             $i++;
>             $result = $i * $i;
>             if ($result === $num) {
>                 return true;
>             }
>         }
>         return false;
>       }
>     }

---

### Solution - Binary Search

>     class Solution {
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
