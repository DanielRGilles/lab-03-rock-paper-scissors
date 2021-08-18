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
    if (userThrow.value === 'Paper' && compThrow.value === 'Rock') {
        return 'win';
    }
    else if (userThrow.value === 'Paper' && compThrow.value === 'Scissors') {
        return 'lose';

    }
    else if (userThrow.value === 'Rock' && compThrow.value === 'Paper') {
        return 'lose';
    } 
    else if (userThrow.value === 'Rock' && compThrow.value === 'Scissors') {
        return 'win';

    }
    else if (userThrow.value === 'Scissors' && compThrow.value === 'Rock') {
        return 'lose';

    }
    else if (userThrow.value === 'Scissors' && compThrow.value === 'Paper') {
        return 'win';
    } else {
        return 'draw';
    }
    
}