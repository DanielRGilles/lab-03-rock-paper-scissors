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