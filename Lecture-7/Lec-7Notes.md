<h2>Lecture - 7</h2>

<h3>CSS Float</h3>

● Float is used to position the elements of an parent element.

● It makes a another imaginary plane above the normal plane and places the child elements in that imaginary plane.

● This will make parent to collapse.

● We have to clearFix the parent (so that it will not collapse), hence it will maintain its original structure.

▶ We can clearFix the parent in two ways :-

1. Adding a dummy div inside the parent as its immediate child.
```
// Inside index.html
<div class="div">
    <div class="side-a">Some Content</div>
    <div class="side-b">Some Content</div>
    <div class="clearFix"></div>
</div>
```
```
// Inside style.css
.side-a{
    float: left;
}
.side-b{
    float: right;
}
.clearFix{
    clear: both;
}
```

2. using after property on parent.
```
// Inside index.html
<div class="div">
    <div class="side-a">Some Content</div>
    <div class="side-b">Some Content</div>
</div>
```
```
// Inside style.css
.div::after{
    content: "";
    display: table;
    clear: both;
}
```

<h3>Positions</h3>

● ```position``` CSS property sets how element is positioned in a document. 

● ```top```, ```right```, ```bottom``` and ```left``` properties determines the final location of positioned elements.

<strong>1. Static</strong>

● ```position: static;``` positions the element according to the normal flow.  ```top```, ```right```, ```bottom```, ```left``` and ```z-index``` do not work on this.

<strong>2. Relative</strong>

● ```position: relative;``` postions element according to its position. ```top```, ```right```, ```bottom``` and ```left``` will move it from its original position, and the space of original position will be occupied.

<strong>3. Absolute</strong>

● ```position: absolute;``` positions the element according to its parent. ```top```, ```right```, ```bottom```, ```left``` move element with respect to parent element. It will move out of the normal place and the space will be released.

⁂ <em>It will take the position according to that parent to which position is assigned</em> (Jis bhi parent ko position de rakhi hogi ussi parent ke hisab se absolute position define hogi).

<!-- <strong>4. Sticky</strong>

● ```position: sticky``` sticks the element to the position. If we scroll the web-page then it will maintain its position and will be visible throughout the page. -->