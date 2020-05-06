
# Number Complement 

---

### Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

---

### Solution - Simple

>     <?php
>     /**
>      * @param Integer $num
>      * @return Integer
>      */
>     function findComplement($num) {
>         $bNum = decbin($num);
>         $trans = array("0" => "1", "1" => "0");
>         $returnNum = strtr($bNum, $trans);
>         return bindec($returnNum);
>     } 
