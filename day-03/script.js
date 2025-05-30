
// Task 1. Odd or Even?
const a = 27;
const b = 50;

console.log(a % 2 === 0 ? a + " is the even number" : a + " is the odd number");
console.log(b % 2 === 0 ? b + " is the even number" : b + " is the odd number");



// Task 2. Do you have a Driving License?
let age = 17;
let hasdriverlicense = true;

if (age >= 18 && hasdriverlicense) {
    console.log(age + " Age so you can drive the car")
}
else if (age >= 18 && !hasdriverlicense) {
    console.log(age + " Age so you can apply the driving license for drive")
}
else {
    console.log(age + " Age so you cann't drive the car")
}



// Task 3. Calculate CTC with a Bonus
let monthlySalary = 12300;
let yearlySalary = monthlySalary * 12;
let bonous = yearlySalary * (20/100); // 20% bonus
let totalCTC = yearlySalary + bonous;

console.log("Your monthly salary is: " + monthlySalary);
console.log("Your yearly salary is: " + yearlySalary);
console.log("After 20% Bonus Your total CTC is: " + totalCTC);



// Task 4. Write a program for the Traffic Light Simulation.
let traficLight = "red"; 

switch (traficLight){
    case "red" :
        console.log("Stop The Car");
        break;
    case "yellow" :
        console.log("Get Ready To Go");
        break;
    case "green" :
        console.log("You Can Go Now");
        break;
    default:
        console.log("Invalid Traffic Light Color");
}


// Task 5. Create an Electricity Bill Calculator
let units = 4;
let monthlyBill   = units*150;
let annual_bill = monthlyBill  * 12;
let discount = annual_bill*0.2;

console.log("Your monthly electricity bill is: " + monthlyBill + " rupees");
console.log("Your annual electricity bill is: " + annual_bill + " rupees");
console.log("After 20% discount, you have to pay: " + (annual_bill - discount + " rupees"));



// Task 6. Leap Year Checker Is 2025 a Leap Year?
let year = 2025;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}



// Task 7. Max of Three Numbers
let p = 8;
let q = 24;
let r = 10;

let z = (p > q && p > r) ? p
    : (q > p && q > r) ? q
        : (r > p && r > q) ? r
            : "All numbers are equal";

console.log("The maximum number is: " + z);




// Task 8. Bitwise Doubling
let count = 5; //00000101
console.log(count << 1); // 00001010 =>10
console.log(count << 2); // 00010000 =>20
