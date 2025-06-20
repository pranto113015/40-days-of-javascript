
// ********** Task 1 **********
let d = "Monday";

switch (d) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
}


console.log('JavaScript’s switch statement is case-sensitive, meaning it treats uppercase and lowercase letters as different characters thats why output is "It\'s a normal day."');





// ********** Task 2 : Build an ATM Cash Withdrawal System **********

let WithdrawAmount = 570;

if (WithdrawAmount % 100 === 0) {
    console.log(`Withdrawal successful : ${WithdrawAmount} has been withdrawn from your account.`);
} else {
    console.log(`Invalid amount : ${WithdrawAmount} Please enter an amount that is a multiples of 100.`);
}




// ********** Task 3 : Build a Simple Calculator Using Switch Case **********

let operator = prompt("Enter an operator (+, -, *, /, %):");
let num1 = 15;
let num2 = 10;


switch (operator) {
    case '+':
        console.log(`The numbers are: ${num1} and ${num2}`);
        console.log(`The sum of two numbers is : ${num1 + num2}`);
        break;
    case '-':
        console.log(`The numbers are: ${num1} and ${num2}`);
        console.log(`The sum of two numbers is : ${num1 - num2}`);
        break;

    case '*':
        console.log(`The numbers are: ${num1} and ${num2}`);
        console.log(`The sum of two numbers is : ${num1 * num2}`);
        break;

    case '/':
        console.log(`The numbers are: ${num1} and ${num2}`);
        console.log(`The sum of two numbers is : ${num1 / num2}`);
        break;

    case '%':
        console.log(`The numbers are: ${num1} and ${num2}`);
        console.log(`The sum of two numbers is : ${num1 % num2}`);
        break;
    default:
        console.log("Invalid operator , please use +,-,*,/,%");

}




// ********** Task 4 : Build a Simple Movie Ticket System **********

let age = prompt("Enter your age:");

let ticketPrice = 0;

if (age < 18) {
    ticketPrice += 3;
    console.log(`Your ticket price is $${ticketPrice}. You are eligible for a child discount.`);
} else if (age >= 18 && age <= 60) {
    ticketPrice += 10;
    console.log(`Your ticket price is $${ticketPrice}. You are eligible for a regular adults ticket.`);
} else {
    ticketPrice += 6;
    console.log(`Your ticket price is $${ticketPrice}. You are eligible for a senior citizen discount.`);
}



// ********** Task 5 : Build a Horoscope Sign Checker **********

let month = prompt("Enter your birth month (1-12):");
let day = prompt("Enter your birth day (1-31):");

if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Aries.`);

} else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Taurus.`);

} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Gemini.`);

} else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Cancer.`);

} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Leo.`);

} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Virgo.`);

} else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Libra.`);

} else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Scorpio.`);

} else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Sagittarius.`);

} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Capricorn.`);

} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Aquarius.`);


} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Pisces.`);

} else {
    console.log(`Your Birth month and day ${month} and ${day} horoscope sign is Invalid date. Please enter a valid month (1-12) and day (1-31).`);
}




// ********** Task 6 : Build a Triangle Checker **********

let side1 = prompt("Enter the length of the first side:");
let side2 = prompt("Enter the length of the second side:");
let side3 = prompt("Enter the length of the third side:");

if (side1 === side2 && side2 === side3) {
    console.log("The triangle is Equilateral Triangle.");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("The triangle is Isosceles Triangle.");
} else {
    console.log("The triangle is Scalene Triangle.");
}