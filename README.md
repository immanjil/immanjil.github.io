Portfolio based on code from Traversy Media's 7-part "Responsive Portfolio Website Project" Youtub Tutorail.
https://www.youtube.com/watch?v=gYzHS-n2gqU&list=PLillGF-RfqbYoGoCjKoMOkVznV6aSXKzU

Code for Traversy Media's portfolio located at github account - https://github.com/bradtraversy/modern_portfolio
  1.  This responsive code uses html5, Sass, CSS and a little bit of JavaScript.
  2.  It uses grid to stack the elements as the screen shrinks
  3.  It uses media query to handle screen sizes.  
  4.  The end result is a great looking website.
  
Deployment to GitHub Page
1. Install angular-cli-ghpages 
    npm install -g angular-cli-ghpages
2. create a build for release
    ng build --prod --base-href "<repo-name>"
3. Use angular-cli-ghpages comaand to update Github Page.
    ngh --branch=master
