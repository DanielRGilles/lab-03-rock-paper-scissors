## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML setup
    1. 3 label and radio inputs
    2. button to submit
    3. score section to diplay results
    4. header for title

## grab dom elements
    1. ids for html elements
## state
    1. number of wins/losses
    
## events
    1. click button
        get userSelectedThrow.value 
        get computer generated value getRandomThrow
        compare values and determine winner via compareThrow function
