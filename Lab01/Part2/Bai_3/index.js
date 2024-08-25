
const calcBMI= (mass, height) => {
    return mass / (height ** 2);
}
// 1. Tạo các object cho Mark và John
const mark = {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69, // meters
    calcBMI: function() {
        this.bmi = calcBMI(this.mass, this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95, // meters
    calcBMI: function() {
        this.bmi = calcBMI(this.mass, this.height);
        return this.bmi;
    }
};

// 2. Tính BMI cho cả hai
mark.calcBMI();
john.calcBMI();

// 3. So sánh và log ra kết quả
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(2)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(2)})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
}
