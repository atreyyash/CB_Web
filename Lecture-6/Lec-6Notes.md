<h2>Lecture - 6</h2>

<h3>Specificity</h3>

<h3>Colors</h3>

● We have three ways to give colors in our HTML page.

1. Hexadecimal
Hexadecimal values are given using '#'. Takes 6 values. for example : ``` background-color: #RRGGBBAA ```
2. RGB values
The color is decided with the combination of Red, Green & Blue. The color will be inclined towards that color which has more units.
3. RGBA (A - Alpha channel)
a value ranges from 0 - 1. 
0 means opaque and 1 means transparent.

<h3>CSS Units</h3>

● Two Types

1. Absolute (px)

2. Dynamic (%, em, rem, vh, vw)

» % → Respective to Parent tag.

» em → Multiply the size of parent to the given no.
for example : ``` li: 2em; ``` this will mul 2 to the parent size value.

⟫ Difference between em and rem is that em multiples the factor to the size of parent element whereas rem multiples the factor to root element and we have only one root i.e html. em shows snowball effect and rem not.

<h3>Box Model</h3>

● Every thing inside HTML is treated as box.

● Box model only works on block elements.

● On Inline element, height and width does not work and margin only works for left and right whereas padding works for all sides.

<dl>
    <dt>Margin</dt>
    <dd>Outermost area of the box model</dd>
    <dt>Border</dt>
    <dd>It marks the boundary of the element, takes space outside the box.</dd>
    <dt>Padding</dt>
    <dd>It is the space between border and content of the element.</dd>
    <dt>Content</dt>
    <dd>It is the main message that is to be displayed on the web page.</dd>
</dl>

» The order of above attributes are maintained in box model.