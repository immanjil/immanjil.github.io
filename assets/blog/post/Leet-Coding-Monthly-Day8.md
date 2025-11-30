# Check If It Is a Straight Line

---

### You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

---

### Solution - Simple Solution

>     class Solution {
> 
>     function slope($x1, $y1, $x2, $y2) 
>     { 
>         return ($y2 - $y1) /  
>                ($x2 - $x1); 
>     } 
>     /**
>      * @param Integer[][] $coordinates
>      * @return Boolean
>      */
>     function checkStraightLine($coordinates) {
>         if(count($coordinates) <= 2) {
>             echo '2 points' . PHP_EOL;
>             return true;
>         }
> 
>         $m = $this->slope($coordinates[0][0],$coordinates[0][1], $coordinates[1][0], $coordinates[1][1]);
>         $b = $coordinates[0][1] - $m*$coordinates[0][0];
> 
>         echo 'Slope' . PHP_EOL;
>         var_dump($m);
>         echo '$b' . PHP_EOL;
>         var_dump($b);
>         unset($coordinates[0]);
>         unset($coordinates[1]);
>         foreach ($coordinates as $c) {
>             if ($c[1] !== (($m * $c[0]) + $b)) {
>                 return false;
>             }
>         }
>         return true;
>       }
>     }
