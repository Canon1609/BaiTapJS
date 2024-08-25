// 1. Tạo mảng 'bills' chứa các giá trị hóa đơn
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Tạo mảng trống cho tips và totals
const tips = [];
const totals = [];

// 3. Hàm tính tiền tip
const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
};

// Sử dụng vòng lặp để tính toán tips và totals cho mỗi giá trị hóa đơn
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// Bonus: Viết hàm tính trung bình của một mảng
const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

// Gọi hàm với mảng 'totals'
const averageTotal = calcAverage(totals);
console.log('Average Total:', averageTotal);
