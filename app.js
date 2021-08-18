import { computersThrow } from './get-random-throw.js';

// import functions and grab DOM elements

const buttonEl = document.querySelector('#submit');
const winsEl = document.querySelector('#loss-total');
const lossEl = document.querySelector('#wins-total');
// initialize global state
let wins = 0;
let loss = 0;
let compThrow = null;
// set event listeners 

buttonEl.addEventListener('click', () => {
    const userSelectedThrow = document.querySelector('input[type=radio]:checked');

    let userThrow = userSelectedThrow.value;
//  console.log(userThrow);
 // get user input
    compThrow = computersThrow();
console.log(compThrow);  

});
 
  // use user input to update state 
  // update DOM to reflect the new state
