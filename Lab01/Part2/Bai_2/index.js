const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// kiểm tra với hóa đơn trị giá 100
console.log(calcTip(100)); // 15

//tạo mảng bills
const bills = [125, 555, 44];

// tạo mảng tips
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("tiền tip là:",tips); // [18.75, 111, 8.8]

//tạo mảng total
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("tổng tiền là:",totals); // [143.75, 666, 52.8]

