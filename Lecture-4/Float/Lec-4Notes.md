<h2>Lecture - 4</h2>

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