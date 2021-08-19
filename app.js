import { computersThrow, whoWon } from './get-random-throw.js';

// import functions and grab DOM elements

let wins = 0;
let loss = 0;
let draws = 0;

const buttonEl = document.querySelector('#submit');
const winsEl = document.querySelector('#loss-total');
const lossEl = document.querySelector('#wins-total');
const resultEl = document.querySelector('#throw-result');
const drawsEl = document.querySelector('#draw-total');
// initialize global state

let compThrow = null;

// set event listeners 

buttonEl.addEventListener('click', () => {
    const userSelectedThrow = document.querySelector('input[type=radio]:checked');
    let userThrow = userSelectedThrow.value;


    compThrow = computersThrow();
 

    const throwResult = whoWon(userThrow, compThrow);
  
    if (throwResult === 'win') {
        wins++;
        resultEl.textContent = 'You Win!';
    } else if (throwResult === 'draw') {
        draws++;
        resultEl.textContent = 'You Draw!';
    } else { 
        loss++;
        resultEl.textContent = 'You Lose';}
    lossEl.textContent = wins;
    winsEl.textContent = loss;    
    drawsEl.textContent = draws; 
       
   
});


 
  
      