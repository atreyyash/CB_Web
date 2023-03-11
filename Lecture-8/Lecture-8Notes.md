# JavaScript

***
***General***
* JS is also called ECMAScript 

* ECMAScript - 6 / ES-6 is the latest version

* We will use Vanilla JS / ECMAScript-5

***

> DataType ki value hoti hai & Iss value ko ek bucket me store karti hai

> There are two types of languages:- 
Strongly Typed and Weekly Typed.

* ***Strongly types language*** is usme pahle se pata hota hai bucket me kaunsi data type ayega aur kitni space occupy karega.

* ***Weekly typed language*** allows any kind of values to in a bucket.

***

<h3>Data Types</h3>

> ***Data Types that are available in JS are <br> 1. Number: It does not have int or float all numbers are of one type that is Number <br> 2. String: all types of characters and strings are enclosed in String type <br> 3. Boolean: consist of true or false value. <br> 4. Function: A block of code that is specified to perform particular tasks. <br> 5. Undefined: Variable that is not assigned any value. <br> 6. Object: Consists of key value pair. Can contain hetrogenous values.***

***
# There are 3 keywords by which variables are defined <br> ```let```, ```var``` and ```const```. If you want to define that any variable cannot be defined without keyword then at the top of the code write ```'use strict'```.

> **Note:** If a variable is defined using const keyword than it is not possible to change its value.

***

# Array

* Array is created from doubly LL.

* **Array Declaration:-**

```let arr = ["Jello", 1, 2, true, "abc"];```

* **Printing Array:-**

1. ```console.log(arr[0], arr[1]);```
2. 
```for (let i = 0; i < arr.length; i++) {console.log(arr[i]);}```

3. ```console.log(arr);```

* **Array Functions:-** 

1. *arr.shift():-* remove karega front se
2. *arr.unshift():-* aage se insert karega
3. *arr.pop():-* remove karega end se
4. *arr.push():-* add karega end se