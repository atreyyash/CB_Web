<h1>Lecture - 2</h1>

<h2>Internal CSS</h2>

```
<style>
        h1{
            color: red;
        }

        h2{
            color: rgb(150, 120, 110);
        }
</style>
```

» We need to specify which HTML tag we need to target

<h2>Inline CSS</h2>

```
<h2 style="color: red;">This is a Heading!</h2>
```

» This method is not preferred 

» written in the style attribute in HTML tag.

<h2>External CSS</h2>

» Written in separate file

```
<link rel="stylesheet" href="style.css">
```

» link:css shortcut to write the above line

<h2>CSS Properties</h2>

● Basic Structure :- 

```
h2{
    color: blueviolet;
    font-size: 50px;
}

p{
    color: brown;
}

h1{
    font-size: 20px;
}
```

» If we change the propeties of p-tag than it will change the properties of all p-tag.

» If we want to give same property to different tag then we can comma-seperate them
```
h1, h2, h3, h4{
    font-size: 30px;
    line-height: 35px;
}
```

» Pixels is the smallest unit

● Margin 
```
// This will acquire same margin around the element
margin: 30px;
```

```
// Margin can also be defined seperately in the following way :-
margin-top: 10px;
margin-bottom: 40px;
margin-right: 10px;
margin-left: 90px;
```
```
// T = Top, B = Bottom
// L = Left, R = Right
        T/B  L/R
margin: 30px 60px;
```

```
         T    R    B    L
margin: 30px 80px 40px 10px;
```
● Same pattern is followed by paading.

● In <u>Sans-Serif</u> we dont have strokes 
● In <u>serif</u> we have strokes

● The priority of font family goes from left to right.
```
font-family: 'Times New Roman', Times, serif;
```

<h3>Border</h3>
```
border: 5px solid black;
```

» Types of Border :- solid, dotted, dashed

<h3>Descendants Selector</h3>

» These selectors are used specifically target a tag.

» To target any tag the tags are separated by spaces.

```
em{
    color: blue;
}
/* space is used to select descendant of p-tag */
p span{
    background-color: turquoise;
}
// Here you can see that p span and em are seperated by spaces.
// Spaces show that span is the child of p and em is the child of span.
p span em{
    background-color: black;
    color: white;
}
```
» The main reason to use descent selectors is to target required tags when other CSS is also applied.

→ em tag is used for <em><u><strong>italics</strong></u></em>