// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

console.log("Data 1:");
if(markBMI1 > johnBMI1) {
    console.log("Mark's {markBMI1} is higher than John's {johnBMI1}.");
} else if(markBMI1 < johnBMI1) {
    console.log("Mark's {markBMI1} is lower than John's {johnBMI1}.");
} else {
    console.log("Mark's {markBMI1} is equal to John's {johnBMI1}.");
}

// Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

console.log("Data 2:");
if(markBMI2 > johnBMI2) {
    console.log("Mark's {markBMI2} is higher than John's {johnBMI2}.");
} else if(markBMI2 < johnBMI2) {
    console.log("Mark's {markBMI2} is lower than John's {johnBMI2}.");
} else {
    console.log("Mark's {markBMI2} is equal to John's {johnBMI2}.");
}
