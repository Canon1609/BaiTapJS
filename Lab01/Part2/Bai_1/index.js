const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
    }

//tính điểm trung bình của 2 đội
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

//kiểm tra đội chiến thắng
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

//xác định đội chiến thắng
console.log('Test data 1');
checkWinner(avgDolphins1, avgKoalas1);

console.log('Test data 2');
checkWinner(avgDolphins2, avgKoalas2);