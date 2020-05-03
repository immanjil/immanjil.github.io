
# Ransom Note

---

### Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

### Each letter in the magazine string can only be used once in your ransom note.

### Note: You may assume that both strings contain only lowercase letters.

---

### Solution - Simple
  
> class Solution {
> 
>     /**
>      * @param String $ransomNote
>      * @param String $magazine
>      * @return Boolean
>      */
>     function canConstruct($ransomNote, $magazine) {
>         if(empty($ransomNote)) {
>             return true;
>         }
>         $ransomNote = str_split($ransomNote);
>         $magazine = str_split($magazine);
>         $rC = array_count_values($ransomNote);
>         $rM = array_count_values($magazine);
>         foreach ($rC as $k=>$v) {
>             if(!isset($rM[$k]) || $rM[$k] < $v) {
>                 return false;
>             }
>         }
>         return true;
>     }
> }

---

[Manjil](mailto:iammanjil@gmail.com)
