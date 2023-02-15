// Import the sync-input module to get user input synchronously.
// Define the currencies object with currency codes and their values.

const input = require('sync-input');
const currencies = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};

// Display initial welcome message with currency exchange rates
console.log(`Welcome to Currency Converter!
1 USD equals ${currencies['USD']} USD
1 USD equals ${currencies['JPY']} JPY
1 USD equals ${currencies['EUR']} EUR
1 USD equals ${currencies['RUB']} RUB
1 USD equals ${currencies['GBP']} GBP`);

// Function to handle currency conversions
function convertCurrencies() {
    console.log("What do you want to convert?");

    // Get input for the currency to convert from and validate
    let from = input('From:').toUpperCase();
    if (!(from in currencies)) {
        console.log('Unknown currency');
        return;
    }

    // Get input for the currency to convert to and validate
    let to = input('To:').toUpperCase();
    if (!(to in currencies)) {
        console.log('Unknown currency');
        return;
    }

    // Get input for the amount to convert and validate
    let amount = Number(input('Amount:'));
    if (amount < 1) {
        console.log('The amount cannot be less than 1');
    } else if (isNaN(amount)) {
        console.log("The amount has to be a number");
    } else {
        // Calculate the result and display it
        const convert = currencies[to] * (amount / currencies[from]);
        console.log(`Result: ${amount} ${from} equals ${convert.toFixed(4)} ${to}`);
    }
}

// Function to start the program and handle user input
function startProgram() {
    while (true) {
        console.log("What do you want to do?\n" +
            "1-Convert currencies 2-Exit program");

        // Get user input for what action to perform
        let choose = input();

        if (choose === "2") {
            console.log("Have a nice day!");
            break;
        } else if (choose === "1") {
            convertCurrencies();
        } else {
            console.log("Unknown input");
        }
    }
}

// Call the startProgram function to begin the program
startProgram();
