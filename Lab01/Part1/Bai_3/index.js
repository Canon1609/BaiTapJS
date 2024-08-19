// Function to calculate the average score
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Function to determine the winner
function determineWinner(dolphinsAvg, koalasAvg) {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log('Dolphins win the trophy! with an average score of ' + dolphinsAvg);
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log('Koalas win the trophy! with an average score of ' + koalasAvg);
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log('It\'s a draw!');
    } else {
        console.log('No team wins the trophy ');
    }
}

// Test Data 1
let dolphinsAvg1 = calculateAverage(96, 108, 89);
let koalasAvg1 = calculateAverage(88, 91, 110);
console.log('Test Data 1:');
determineWinner(dolphinsAvg1, koalasAvg1);

// Bonus 1
let dolphinsAvgBonus1 = calculateAverage(97, 112, 101);
let koalasAvgBonus1 = calculateAverage(109, 95, 123);
console.log('Bonus Data 1:');
determineWinner(dolphinsAvgBonus1, koalasAvgBonus1);

// Bonus 2
let dolphinsAvgBonus2 = calculateAverage(97, 112, 101);
let koalasAvgBonus2 = calculateAverage(109, 95, 106);
console.log('Bonus Data 2:');
determineWinner(dolphinsAvgBonus2, koalasAvgBonus2);
