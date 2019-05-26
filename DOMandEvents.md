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