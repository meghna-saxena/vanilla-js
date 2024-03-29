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

- Difference b/w for and while loop:
    - in while loop we only have condition.

Example:

```
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
```

- `continue and break statements`
    - `continue` is used to quit current iteration of the loop and continue to the next one.
    - `break` is used to exit out of the loop.

```
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log('continue', john[i]);
}
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log('break', john[i]);
}
// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log('reverse', john[i]);
}

// continue John
continue Smith
continue designer
continue blue
break John
break Smith
reverse blue
reverse false
reverse designer
reverse 1990
reverse Smith
reverse John

```
_____________

## Short history of Javascript

- 1996 -> Changed from livescript to javascript to attract java developers. JS has nothing to do with Java.

- 1997 -> ES1 (ECMAScript 1) became the first version of JS language standard:
    - ECMAScript: The langauge standard.
    - JavaScript: The language in practice.

- 2009 -> ES5 (ECMAScript 5) was released w/ lots of new features.

- 2015 -> ES6/ES2015 (ECMAScript 2015) was released: the biggest update to language ever!

- 2015 -> Changed to `annual release cycle`.

- All the future versions ES9/ES10.. are called ESNext


## JavaScript today: which version to use?

- ES5 -> Fully supported in all browsers. Ready to be used today.

- ES6-ES10 -> Well-supported in all modern browsers. 
    - `Not supported in older browsers. Can use most features in prod. while transpiling and polyfilling (converting to ES5).`

_______________

> Good object properties and method example:

```
/* John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john);
console.log(mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}

// prints
{ fullName: 'John Smith',
  bills: [ 124, 48, 268, 180, 42 ],
  calcTips: [Function: calcTips],
  tips: [ 18.599999999999998, 9.600000000000001, 26.8, 27, 8.4 ],
  finalValues: [ 142.6, 57.6, 294.8, 207, 50.4 ],
  average: 18.080000000000002 }
{ fullName: 'Mark Miller',
  bills: [ 77, 475, 110, 45 ],
  calcTips: [Function: calcTips],
  tips: [ 15.4, 118.75, 11, 9 ],
  finalValues: [ 92.4, 593.75, 121, 54 ],
  average: 38.5375 }
Mark Miller's family pays higher tips, with an average of $38.5375

```

______________

## How JavaScript works behind the scenes

### How Javascript code is executed: Javascript parsers and engines

Javascript is `hosted in some environment, most typically a browser`. There can be other hosts, eg: node.js web server etc.

Javascript host (browser) has `javascript` engine which takes code and execute it.

Javascript engine is a program that executes js code.
Many engines like `google v8 engine`.

- `First thing that happened inside the engine is` - code is parsed by a `parser` which basically reads code line-by-line and checks the syntax -> if something is wrong parser stop execution, and if syntax is right: 
    - Parser creates `abstract syntax tree` which is then ..
    - translated into `machine code`, so its converted into set of instructions that can be executed directly by the computer.
    - When js code is converted into machine code, then only it `actually runs` and does it work.

"Let's meet the cast of characters that interact to process the program var a = 2;, so we understand their conversations that we'll listen in on shortly:

Engine: responsible for start-to-finish compilation and execution of our JavaScript program.

Compiler: one of Engine's friends; handles all the dirty work of parsing and code-generation (see previous section).

Scope: another friend of Engine; collects and maintains a look-up list of all the declared identifiers (variables), and enforces a strict set of rules as to how these are accessible to currently executing code."

Now let's see how that came about:

JS didn’t need to be terribly fast for a long time (performance isn’t a huge concern when interpreting little scripts on a web page), so simply being interpreted was fine. Once performance did become a concern (Google Maps being obvious example), most newer engines switched to using a JIT compiler that actually compiles the code (either to intermediate byte code or directly to machine instructions). Compiled code is much faster - there’s a hit at the start as the program compiles, but after that performance is much improved. e.g. V8 has two compilers, one that runs straightaway and produces code very quickly, then an optimising compiler which recompiles certain parts of the code to make it more efficient (plus a decompiler which will reverse the compilation made by the optimising compiler if needed).

Note there are a load of tiny JS engines used for embedding in other software in which the JS is just interpreted - they need to be very lightweight so don’t bother with the beefy, complex JIT code - they’re just there to give scripting capabilities.

This is all effectively an implementation detail - you treat JS as if it’s an interpreted language, the fact it is compiled at runtime makes no difference to you actually writing the code - eg.

You write your code.

Then you hit run.

Then the compiler compiles your code, a.k.a turn it into machine code.

> Extra note: JavaScript engine for Chrome, the V8 Engine, is coded in C++.

Every web browser has a piece of software within it called a JavaScript (JS) engine. Chrome's is called V8, Firefox is called SpiderMonkey and Safari's is called Nitro etc.

______________

## Execution Contexts and Execution Stack

All js code needs to run in an environment and this environment is k/a `execution context`.

- *Execution context:* Imagine it like a box, a container, or a wrapper which stores variables and in which a piece of our code code is evaluated  and executed. 

- The default execution context is the `global execution context`.

- `Code that's not inside any function, associated w/ the global object`. In the browser, that's the `window object`.   

> lastName === window.lastName //true

Extra:
Properties are variables attached to object.


```
var name = 'John';

function first() {
    var a = 'Hello';
    second();
    var x = a + name;
}

function second() {
    var b = 'Hi';
    third();
    var z = b + name;
}

function third() {
    var c = 'Hey';
    var z = c + name;
}

first();

```

// first method will be called, second will be called, third will be called, third will return its value and pop off the stack, then second will return and pop off the stack, then first will return, and clear the stack.

- `Global execution context` is for code that is not inside any function.

- Each time a function is called, it gets a new `execution context`.

- New context is put on top of current context -> this is k/a `execution stack` Whenever a new function is called a new `execution context` is created and when the function returns, the `execution context` is popped off the `execution stack`

_____________
## Execution Context in detail: Creation and Execution Phase and Hoisting

- We can associate `Execution context` with an object.
    - This object has `3 properties`:
        1. `Variable Object (VO)` which will contain function arguments, function decalrations and variable declarations.
        2. `Scope chain` which contains current variable of the object as well as variables of it parent.
        3. `this` variable.

> How execution context is formed?
- When a function is called, an execution context is created and put on top of the execution stack, and this happens in phases:

    - Creation phase
        - Creation of the variable object (VO).
        - Creation of scope chain.
        - Determine value of `this` variable.

    - Execution phase
        - The code of the function that generated the current execution context is ran line-by-line.

___________

## Creation phase:

### The Variable Object (VO)

- The `argument object` is created, containing all the args that were passed into a function.
- The code is scanned for `function declarations`: for each function, a property is created in the Variable Object, pointing to the function.
- The code is scanned for `variable declarations`: for each variable, a property is created in the Variable Object, and set to undefined.

The last wo poins are k/a hoisting. Functions and variables are hoisted in javascript, which means they are available before the execution actually starts.

They are hoisted differently though, functions are already defined before the execution phase starts while variables are set to undefined, and will only be defined in execution phase.


## Hoisting in practice

```
// functions

calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

*function declaration works! *


retirement(1956); 

// *function expression doesn't work. Variable is hoisted but function is not assigned.
// Uncaught TypeError: retirement is not a function

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();

console.log(age); 
//23, undefined, 65 

prints undefined instead of 23 from global scope, because inside the function hositing occurs, since already a variable named age was present, so it was hoisted and the value was set to undefined. If inside the function, the varibale name was not similar, then it would have printed 23.
    
```
____________

## Scoping and Scope chain

### Note:

> Execution context object ->
> - Variable object (VO)
> - scope chain
> - `this` variable

Scoping answers the question "where can we access a ceratin variable or function?"

In javascript, *each function creates a scope*: the space/ environment, in which the variables it defines are accessible.

In other langauges, if blocks, for blockas and while blocks also creates scope, but not in javascript. In js, only func. creates a scope.

`Lexical scoping:` a function that is lexically within another function get access to the scope of the outer function.

Lexical means the position where something is written in our code.

```
var a = 'Hello';
first();

function first() {
    var b = 'Hi';
    second();

    function second() {
        var c = 'Hey';
        console.log(a + b + c); // HelloHiHey
    }
}

```

Example of scope chain ^ (it goes from inwards/downwards to upwards..)
Checks variable object in local scope, parent scope and global scope.


## Execution stack vs Scope Chain


```
var a = 'Hello';
first();

function first() {
    var b = 'Hi';
    second();

    function second() {
        var c = 'Hey';
        third(); 
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d); 
}

```

`Execution stack` from downwards to upwards:
`Order in which functions are called.`

```

Global execution context -> Execution context first() -> Execution context second() -> Execution context third()

```

`Scope Chain` from downwards to upwards:
`Order in which functions are written lexically.`

```

Scope third() -> Scope second() -> Scope first() -> Global scope

```
____________

## The `this` Keyword


> Execution context has 2 phases:

- Creation phase
    - variable object creation
    - scope chain creation
    - determining and setting the value of `this` keyword
- Execution phase

The `this` variable is a variable that each and every execution context gets and is stopred in execution context object.

Where does the `this` keyword points?

- *Regular function call:* the `this` keyword `points at the global object`, (the window object, in the browser).

- *Method call:* the `this` variable points to the boject that is calling the method.
    - Method is a func. attached to an object.


> Note: The `this` keyword is not assigned a value until a funct. where it is defined is actually called.

The this keyword is attached to execution context which is only created when a function is invoked/called.

__________


## The `this` keyword in practice:

```

//console.log(this); //window object

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge; //method borrowing
mike.calculateAge();

```