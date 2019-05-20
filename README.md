# JavaScript

## What is Javascript?

- Javascript is a computer programming language which is:
    - light-weight (doesn't eat up lot of computer memory), 
    - cross-platform, (multiple platofrms, not just web development) 
    - object-oriented (language is based on objects) 

- JS is one of the 3 core technolgies of web development. 
    - HTML => Content
    - CSS => Presentation/styling
    - JS => Dynamic effects/ programming

    `HTML` -> Nouns
    Eg: 
    ```
    <p><p> (means "paragraph")
    ```

    `CSS` -> Adjectives
    Eg:
    ```
    p {color: red;} (means "paragraph text is red")
    ```

    `JS` -> Verbs
    Eg:
    ```
    p.hide(); (means "hide the paragraph")
    ```

 
- Today, JS can be used in different places:
    - *Client-side: Javascript was tradiitonally only been used on browsers.*
    - Server-side: With node.js we can use it on server too.

- Javascript makes modern web development possible:
    - Dynamic effects and interactivity
    - Modern web apps that we can interact with.

- Frameworks/Libraries like React and Angular are 100% based on javascript.


## Javascript versions
ES5 -> ES6/2015 -> ES7/ES2016 -> ES8/2017


## Variables and data types
- Variables are like a container to store the value to be used later.
- It stores the value in memory of a computer.
Eg: var name = 'meg';

## Primitive (non-object) data types
5 types

- number -> floating point no., for decimals and integers. In JS, every no. is a floating point no. Eg: 5 is 5.0 in javascript. So even though if a no. is an integer its transformed to floating no. in javascript. This makes javascript different from other programming language, which has diff data types for integers and decimals. 

- string -> sequence of characters, used for text.

- boolean -> logical data type that can only be `true` or `false`.

- undefined -> data type of a variable that doesnt has a value yet.

- null -> also means 'non-existent', but explicitely given no value.

Javascript has `dynamic typing`. So we dont manually assign data types to variables, JS automatically assigns type to variables. If a variable is reassigned a value with diff data type, its type is aslo changed without throwing any error.


## Variable mutation and type coercion

Eg: 
```
var firstName = 'John'
var age = 28

console.log(firstName + '' + age) // John 28
```
Here, age although being of type number coerces to string due to concatenation.

- Declare variables in one line :

```
var job, isMarried; 
//declared variables but the value is undefined.

job = 'teacher';
isMarried = false;
```

- `alert` open a pop-up widnow with ok btn
- `prompt` open a pop-up window with an input field, where user enters info and that can be either logged on console or printed on the screen.


## Operator precendence
```
() grouping
+ -  * /
>= / <=
```

More operators:

```
 x = x + 1;
 x += 1;
 x++; (adds one unit)
 ```


 ## Switch vs if/else

 In switch statemetn write what you want to test.

 Eg:

 ```
 var start = new Date().getTime();
for (i = 0; i < 100000000; i++) {
	var a = i % 10;
        var b;
    if (a = 0) {
        b = i + 1;
    } else if (a = 1) {
        b = i + 3;
    } else if (a = 2) {
        b = i + 9;
    } else if (a = 3) {
        b = i + 2;
    } else if (a = 4) {
        b = i + 33;
    } else if (a = 5) {
        b = i + 4;
    } else if (a = 6) {
        b = i + 66;
    } else if (a = 7) {
        b = i + 2;
    } else if (a = 8) {
        b = i + 5;
    } else if (a = 9) {
        b = i + 19;
    }
}
var end = new Date().getTime();
console.log(end - start);

OR

var start = new Date().getTime();
for (i = 0; i < 100000000; i++) {
	var a = i % 10;
        var b;
        switch(a) {
 		case 0: b = i + 1; break;
 		case 1: b = i + 3; break;
 		case 2: b = i + 9; break;
 		case 3: b = i + 2; break;
 		case 4: b = i + 33; break;
 		case 5: b = i + 4; break;
 		case 6: b = i + 66; break;
 		case 7: b = i + 2; break;
 		case 8: b = i + 5; break;
 		case 9: b = i + 19; break;
	};
}
var end = new Date().getTime();
console.log(end - start);
```

## Truthy & falsy values

Falsy values: Evaluted to false in if/else condition.
`undefined, null, '', 0, NaN`

Truthy values: All values that are not falsy.

Note:
`===` is the strict operator, it will not do type conversion, so if we do:

3 === 3
This will return true that they're equal because they're both numbers, but if we do:

3 === '3'
This will return false because '3'  is a string and will not be converted. Now, if we use:

3 == 3  or

3 == '3'
both of these will return true because two equal operators does `type coercion`. It just cares with the value, not the type.