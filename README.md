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