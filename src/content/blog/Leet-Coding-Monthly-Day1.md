
# First Bad Version  

---

### You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
    
### Suppose you have  `n`  versions  `[1, 2, ..., n]`  and you want to find out the first bad one, which causes all the following ones to be bad.
    
### You are given an API  `bool isBadVersion(version)`  which will return whether  `version`  is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

---

### Solution - Simple Binary Search
  
>     <?php
> 
>     function isBadVersion($n) {
>     $badVersion = range(4, 1000);
>     if (in_array($n, $badVersion)) {
>         return true;
>     }
>     return false; }
> 
>     /**  * returns first bad version for given version  *  * @param
>     Integer $n  * @return Integer  */ function firstBadVersion($n) {
>     $left = 1;
>     $right = $n;
>     while ($left < $right) {
> 
>         $mid = floor($left + ($right - $left) / 2);
> 
>         if (isBadVersion($mid)) {
>             $right = $mid;
>         } else {
>             $left = $mid + 1;
>         }
>     }
>     return $left; }
> 
>     // Test cases to be run $testCases = [5, 100, 444]; foreach
>     foreach ($testCases as $testCase) {
>         $sol = firstBadVersion(5);
>         echo "Then $sol is the first bad version for input: $testCase" . PHP_EOL; 
>     }


