***
# Media Queries
***

* CSS Media queries are a way to target browser by certain characteristics, features, and user preferences, then apply styles or run other code based on those things.

```
@media (min-width: 1200px){
    .teamCards{
        width: 1200px;
        margin: auto;
    }

    .container{
        height: 400px;
        width: 25%;
    }
}
```

> Width is defined for every screen type according to pixels just like the above example. In the above example the media query is written for screens bigger than laptops i.e. TVs

* We can also define media queries for screen between desired range by specifying min-width and max-width for example :- 

```
@media (min-width:992px) and (max-width: 1199px){
    .teamCards{
        width: 90%;
        margin: auto;
    }

    .container{
        height: 400px;
        width: 28%;
    }
}
```

***

***Media Types***

1. `all:` 
Matches all device types. 

2. `print:` 
Matches documents that are viewed in a print preview or any media that breaks the content up into pages intended to print.

3. `screen:`
Matches devices with a screen

4. `speech:`
Matches devices that read the content audibly, such as a screenreader

> Mainly we only define media types for screen or for all.

***

***Media Features***

+ width

+ height

+ aspect-ratio

+ orientation 

+ overflow-block

+ overflow-inline

> We can also add properties like display quality, color, interaction etc.

> **You can also visit [CSS Tricks](https://css-tricks.com/a-complete-guide-to-css-media-queries/) for detailed referene to Media Queries.**

***
# Animations
***

* CSS allows to add animations to HTML without using JS.

> An animation lets an element gradually change from one style to another.

> You can change as many CSS properties you want, as many times as you want.

> To use CSS animation, you must first specify some keyframes for the animation.

> Keyframes hold what styles the element will have at certain times.

***
**KeyFrames**
* Keyframes are defines as follows

```
@keyframes changeShape{
    from{
        border-radius: 0%;
    }
    to{
        border-radius: 50%;
    }
}
```
> To start defining keyframes we write @keyframes and then the name of animation is specified.

> In the curly brackets all the properties are specified with the timestamps

***
**Time Stamps**

* There are two ways in which timestamps are defined.

1. `from{} - to{}:` 
> In this start and end points are added.

2. `0%{} - 50%{} - 100%{}:`
> In this the time is divided into percentage of how much animation is completed. The above specified percentage are not compulsory one can define it according to need.

***

<h3>Adding Animations to element</h3>

```
<!-- Element me animation ka name daalne ke liye -->

animation-name: animation_name_example;
```

```
<!-- kitne time ke liye ye animation chalegi -->

animation-duartion: time-duration;
```

```
<!-- kitne time ke baad animation trugger hogi -->

animation-delay: time;
```

```
<!-- Yato number specify kardo kitni baar chalani ya infinite
dedo for non-stop running -->

animation-iteration-count: number/infinite;
```

```
<!-- timing function defines the speed of the animation -->

animation-timing-function: [ease / linear / ease-in / ease-out / ease-in-out / cubic-beizer(n, n, n, n)]
```
**All attributes are defined below to understand them.**
> ease - Specifies an animation with a slow start, then fast, then end slowly (this is default)

>linear - Specifies an animation with the same speed from start to end

>ease-in - Specifies an animation with a slow start

>ease-out - Specifies an animation with a slow end

>ease-in-out - Specifies an animation with a slow start and end

>cubic-bezier(n,n,n,n) - Lets you define your own values in a cubic-bezier function

```
<!-- Animation kis direction me jayegi jaise forwards, backwards or will go in alternate cycles. -->

animation-direction: [normal / reverse / alternate / alternate-reverse];
```
**A reference to these directions are given below:-**

>normal - The animation is played as normal (forwards). This is default

>reverse - The animation is played in reverse direction (backwards)

>alternate - The animation is played forwards first, then backwards

>alternate-reverse - The animation is played backwards first, then forwards

```
<!-- animation katm hone ke baad element ki kya position rahegi fill-mode ye batata hai -->

animation-fill-mode: [none / forwards / backwards / both];
```
**Fill mode attributes definition:-**

>***none*** - *Default value. Animation will not apply any styles to the element before or after it is executing*

>***forwards*** - *Jaha par animation katm hui element ki position vahi set ho jayegi final that is it will not come back.*

>***backwards*** - *Animation katm hone ke baad apni original position par vapas aa jayega*

>***both*** - *The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions*

***Animation Short Hand***
```
animation: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, animation-play-state
```

***

## *END*