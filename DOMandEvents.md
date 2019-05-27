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


In order to create dice, calculate random number.
get no. b/w 1-6

`dice = Math.floor(Math.random() * 6) + 1;`

> Extra: Math.random() gives a random no. b/w 0-1

If we want value b/w 1-6, multiply Math.random() by 6
so Math.random() * 6 which gives value b/w 0-5. To get value b/w 1-6, add 1 to it; `(Math.random() * 6) + 1`

`Math.floor()` removes decimal point and give whole no.

____________

### Notes:

The object that gives access to DOM is document object.

`document.querySelector()` selects the first element it finds
here the element with the given id
to change the content of the element use `textContent` method

`document.querySelector('#current-0').textContent = dice;`

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

___________

## Events and event handling

- Events: Notifications that are sent to notify the code that something happened on the webpage.

    - Example: clicking a button, resizing a window, scrolling down or pressing a key.

- Event listener: A function that performs an action based on a certain event. It waits for a specific event to happen.

## How events are processed?

In javascript engine we have these things:
    
- Execution stack:
stacks from bottom to top, executed as top to bottom (LIFO, last in first out)

> Global execution context -> Execution context first() -> Execution context second()

- Message Queue 
It is the place where all the events wait in the browser for their turn to be processed in execution stack once its empty.

stacks from left to right (FIFO, first in first out)
> __ <- click event <- scroll event

Rule: An `event` can `only be processed` as soon as the `execution stack is empty`, which means that all the functions have returned.

As soon as the execution stack is empty, the next event in the queue gets processed, so the event listener (function) is called; and since its a function it has its own execution context, which is then put on the top of the execution stack, and become the active execution context

> Global execution context -> Execution context clickHandler() 
_____________

### What to learn?

- How to set up an event handler?
- What a callback function is?
- What an anonymous function is?
- Another way to select elements by ID
- How to change the image in an <img> element?

### Setup event handler
1. Select the element in which event will happen
2. Add event listener
3. addEventListener() method receives 2 args, first one is event type, and second arg is the function which will be called as soon as the event happens

```

function btn() {
   // do something
};

btn();

document.querySelector('.btn-roll').addEventListener('click', btn)

```
Note: Write name of the func without parenthesis, because we're not calling it right here, we want event listener to call the function.

So this btn function here is called `callback function`, because its a function that's not called by us, but by another function

`Callback function is a func. that we pass as an arg to another func., and this other func then calls it for us.`

What if we dont want external func that gets called by event listener, we can then use `anonymous func`

```

document.querySelector('.btn-roll').addEventListener('click', function () {
    // do something
})

```

`anonymous function` is a func. that doesn't have a name, and cannot be reused.
_______

- Another way to select element `getElementById()`:
Dont use hash before the id, since it only accepts id, so just name is enough

`document.getElementById('score-0').textContent = 0;`

Quirks:
- Select the src attibute of img element
 `diceDOM.src = 'dice-' + dice + '.png';`

__________

## Updating score and changing the active player

What you'll learn?
- What the ternary operator is?
- How to add/remove/toggle html classes?


```

//Removing and adding classes
document.querySelector('.player-0-panel').classList.remove('active');

document.querySelector('.player-1-panel').classList.add('active');

//toggle classes
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');

```

Overall event handler:

```

/ setting up event handler
document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = './images/dice-' + dice + '.png';

    // 3. Update the round score, only if the roll no. was not 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        // roundScore = roundScore + dice;

        // display the result as current score
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // next player
        activePlayer = activePlayer === 0 ? 1 : 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;

        // removing and adding classes
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        //toggle classes
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        // hide the dice when value = 1
        document.querySelector('.dice').style.display = 'none';
    }
})

```
_________

## Implementing 'Hold' function:

- How to use functions to correctly apply DRY principle?
- How to think about the game logic like a programmer?


LEARN THIS TECHNIQUE:

```
var scores = [0, 0] // global score

// implementing hold event listener and update the global score

document.querySelector('.btn-hold').addEventListener('click', function () {
    // add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    //scores[activePlayer] = scores[activePlayer] + roundScore;

    // update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player wins the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer();
    }
})

function nextPlayer() {
    // next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    // removing and adding classes
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    //toggle classes
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // hide the dice when value = 1
    document.querySelector('.dice').style.display = 'none';
}

```