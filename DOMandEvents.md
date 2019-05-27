# JavaScript in the browser: DOM Manipulation and Events

## The DOM and DOM manipulation

DOM: Document object model
- Structured representation of an HTML document.
- The DOM is used to connect webpages to scripts like JavaScript.
- For each HMTL element, there is an object in the DOM that we can access and interact with.

```
JavaScript -> <- DOM
(Interaction/Manipulation)
````

We use javascript methods that allows to manipulate DOM and change webpage, and since we said methods which means they are functions attached to object, and that object is `Document Object`.

## Extra notes for CSS:

For positioning,  left: 50%; just sets the top left corner of any element to the center of its parent.  If you stopped here, and did not add anything else, only the LEFT SIDE of the dice would move to the center of the parent container.



Now when you add  transform: translateX(-50%);  it effectively centers the element (dice in this case) because it is saying: "move me left 50% of my computed width".  Therefore no matter the width of the element you are trying to center, it will do so correctly because of the percentage.



So stepwise:

1.  `left: 50%;` Center the top left corner of element.

2.  `transform: translateX(-50%);` Determine element width and move half of that width to the left.


__________________________

What will you learn -

- How to create fundamental game variables?
- How to generate random number?
- How to manipulate the DOM?
- How to read from the DOM?
- How to change CSS styles?


> Extra: Math.random() gives a random no. b/w 0-1

If we want value b/w 1-6, multiply Math.random() by 6
so Math.random() * 6 which gives value b/w 0-5. To get value b/w 1-6, add 1 to it; `(Math.random() * 6) + 1`

`Math.floor()` removes decimal point and give whole no.

____________

### Notes:

Selecting the element dynamically

```
document.querySelector('#current-' + activePlayer).textContent = dice;
```

the above can be k/a as `setter`, since here we're setting the value

> To change the content of html element, there are 2 ways:

    1. `textContent`, which changes to plain text
    
    2. `innerHTML`, for putting some html also in the content. We need to write the content in quotes (''), otherwise javascript parser will think its javascript code, and throw error. So everytime you have to assign some html code to innerHTML it needs to be a string.

`document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>';`

- Storing the value of an element by selecting it, and assigning it to a variable

```
var x = document.querySelector('#score-0').textContent;
console.log(x);
```
^ The above can be k/a as `getter`, since here we're getting and reading the value


- Use querySelector to change the css of some element

```
document.querySelector('.dice').style.display = 'none';
```