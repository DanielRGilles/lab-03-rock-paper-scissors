import { whoWon } from '../get-random-throw.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerThrow = 'Scissors';
    const computersThrow = 'Paper';
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = whoWon(playerThrow, computersThrow);
    const expected = 'win';
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerThrow = 'Rock';
    const computersThrow = 'Rock';
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = whoWon(playerThrow, computersThrow);
    const expected = 'draw';
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerThrow = 'Scissors';
    const computersThrow = 'Scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = whoWon(playerThrow, computersThrow);
    const expected = 'draw';
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerThrow = 'Paper';
    const computersThrow = 'Paper';
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = whoWon(playerThrow, computersThrow);
    const expected = 'draw';
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const playerThrow = 'Scissors';
    const computersThrow = 'Rock';
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = whoWon(playerThrow, computersThrow);
    const expected = 'lose';
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});