export function computersThrow() {
    const cpuChoice = (Math.floor(Math.random() * 3));
    if (cpuChoice === 0) {
        return 'Rock';
    } else if (cpuChoice === 1) {
        return 'Paper';
    } else if (cpuChoice === 2) {
        return 'Scissors';
    }

}



export function whoWon(userThrow, compThrow) {
    if (userThrow === 'Paper' && compThrow === 'Rock') {
        return 'win';
    }
    else if (userThrow === 'Paper' && compThrow === 'Scissors') {
        return 'lose';

    }
    else if (userThrow === 'Rock' && compThrow === 'Paper') {
        return 'lose';
    } 
    else if (userThrow === 'Rock' && compThrow === 'Scissors') {
        return 'win';

    }
    else if (userThrow === 'Scissors' && compThrow === 'Rock') {
        return 'lose';

    }
    else if (userThrow === 'Scissors' && compThrow === 'Paper') {
        return 'win';}
    
    else return 'draw';  
}