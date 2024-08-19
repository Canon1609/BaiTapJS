// Function to calculate tip and total
function calculateTip(bill) {
    // Calculate the tip using the ternary operator
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    
    // Calculate the total value (bill + tip)
    const total = bill + tip;
    
    // Print the result to the console
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
}

// Test Data 1
calculateTip(275);  // Output: The bill was 275, the tip was 41.25, and the total value 316.25
calculateTip(40);   // Output: The bill was 40, the tip was 8.00, and the total value 48.00
calculateTip(430);  // Output: The bill was 430, the tip was 86.00, and the total value 516.00
