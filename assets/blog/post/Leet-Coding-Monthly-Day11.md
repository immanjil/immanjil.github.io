# Flood Fill


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

>     class Solution:
>     def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:     
>         if newColor == image[sr][sc]:
>             return image
>         
>         queue, prevColor = [(sr, sc)], image[sr][sc]
>         
>         while queue:
>             r, c = queue.pop(0)
>             
>             if 0 <= r < len(image) and 0 <= c < len(image[0]) and image[r][c] == prevColor:
>                 image[r][c] = newColor
>                 queue.append((r+1, c))
>                 queue.append((r-1, c))
>                 queue.append((r, c+1))
>                 queue.append((r, c-1))
>         
>         return image


