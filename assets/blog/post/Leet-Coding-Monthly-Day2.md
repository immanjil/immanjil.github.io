
# Jewels and Stones 

---

### You're given strings  `J`  representing the types of stones that are jewels, and  `S`  representing the stones you have. Each character in  `S`  is a type of stone you have. You want to know how many of the stones you have are also jewels.

### The letters in  `J`  are guaranteed distinct, and all characters in  `J`  and  `S`  are letters. Letters are case sensitive, so  `"a"`  is considered a different type of stone from  `"A"`.

---

### Solution - Simple
  
> class Solution {
> 
>     /**
>      * @param String $J
>      * @param String $S
>      * @return Integer
>      */
>     function numJewelsInStones($J, $S) {
>         $jArr = str_split($J);
>         $sArr = str_split($S);
>         $totalGems = 0;
>         foreach ($sArr as $sItem) {
>             if (in_array($sItem, $jArr)) {
>                 $totalGems++;
>             }
>         }
>         return $totalGems;        
>     } }

---

[Manjil](mailto:iammanjil@gmail.com)