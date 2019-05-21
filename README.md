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


## Functions

- If we have to do repetitive task, due to DRY priniciple put it in a function.

Difference b/w arguments and parameters

Arguments are passed to a function during its invocation by the caller. Parameters are defined in the function signature. Sonarguments are mapped to parameters during runtime.

```
function calcAge(yearOfBirth){
....
}
var birthYear = 1990;
calcAge(birthYear);

```

In the above `birthYear is the argument` and `yearOfBirth is the function parameter` local to calcAge.

________________

## Function statements and expressions

> Function declaration
```
function whatDoYouDo(job, firstName) {
    ...
}
```

> Function expression
```
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
```

*Note:*

```
 switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
```

when we return in switch cases, we can avoid using `break`, since `return` stop the further execution of the code, it immediately finishes the function.

When statement doesnt return anything it is undefined.

if (true) {
    console.log(23);
}

// 23
//undefined, since the statment doesn't returns anything


The function expression is when you use the function keyword inside an expression, for example

```
var funcExp = function() {
    console.log("This is function expression");
}
```

Function expression is a func without a name, which is passed some args, and this func is assigned to a variable.

> `In Javascript functions don't return void. If you don't specify what to return from a function it will return undefined.`    

## Arrays

- Collection of items

Initialize new array
- 2 ways: 

        - var names = ['John', 'Mark', 'Jane'];
        - var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

Mutate array data

```
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
```

Different data types

```
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);
```

> Note:
`indexOf item which is not in an array is -1` 

## Objects and properties

- key-value pairs
- difference b/w arrays and object, in objects `order/index` doesnt matter.

> Create new Object literal

```
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
```

3 ways of accessing object: 

```
console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);
```

Mutation
```
john.job = 'designer'; 
john['isMarried'] = true;
console.log(john);
```

New Object syntax

```
var jane = new Object();

jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);
```

## Objects and methods

- Functions attached to objects are k/a methods.

```
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() { //function expression
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();

or

john.age = john.calcAge(); 

//then we can remove this.age from inside the function

console.log(john);

// { firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: [ 'Jane', 'Mark', 'Bob', 'Emily' ],
  job: 'teacher',
  isMarried: false,
  calcAge: [Function: calcAge],
  age: 26 }
```

I guess, you are confused with this statement.

this.age = 2018 - this.birthYear;


In the above example. JavaScript will search for the variable `age` when you execute above instruction. If it is unable to  find the age in the respective object, JavaScript creates that variable and then assigns the values to it.

> Note:
Arrays are also objects, since they also have methods of their own, eg: push(), pop() etc.  

- Javascript gives every object a special keyword `this`. 
- `this` means the current object being used.

Practicing switch statements:

```
var tipCalculator = function(bill)
{
    switch(true) {
        case bill < 50:
            return bill * 0.2;
        case bill >= 50 && bill <= 200:
            return bill * 0.15;
        case bill > 200:
            return bill * 0.1;
        default:
            return bill;
    }
}
 
console.log(tipCalculator(150)); // 22.5
```

_______________

## Loops and iterations

- Controlled structures
    - If/else is an example of it, similarly loops are a controlled structure.
    - Automate repetitive tasks using loops.

```
for (var i = 1; i <= 20; i += 2) { // i = i + 2
    console.log(i);
} 
// 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
```