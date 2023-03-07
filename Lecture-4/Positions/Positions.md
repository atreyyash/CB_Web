# Positions

● ```position``` CSS property sets how element is positioned in a document. 

● ```top```, ```right```, ```bottom``` and ```left``` properties determines the final location of positioned elements.

<strong>1. Static</strong>
-Static(Default)

● ```position: static;``` positions the element according to the normal flow.  ```top```, ```right```, ```bottom```, ```left``` and ```z-index``` do not work on this.

<strong>2. Relative</strong>
    -Relative: Apne khud ki original positions ke respect me move kr paana top, bottom, left, right values set karke hum yeh kaam
            kar sakte hai

● ```position: relative;``` postions element according to its position. ```top```, ```right```, ```bottom``` and ```left``` will move it from its original position, and the space of original position will be occupied.

<strong>3. Absolute</strong>
-Absolute: Apne nearest positioned ancestor ke respect me move karta hai, if no ancestor is positioned then move karega wrt 
        body by default

● ```position: absolute;``` positions the element according to its parent. ```top```, ```right```, ```bottom```, ```left``` move element with respect to parent element. It will move out of the normal place and the space will be released.

⁂ <em>It will take the position according to that parent to which position is assigned</em> (Jis bhi parent ko position de rakhi hogi ussi parent ke hisab se absolute position define hogi).

<strong>4. Sticky</strong>

● ```position: sticky``` sticks the element to the position. If we scroll the web-page then it will maintain its position and will be visible throughout the page.

<strong>5. Fixed</strong>
-Fixed: Ek particular position par fixed ho jayega wrt to body