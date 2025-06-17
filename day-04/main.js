
// ********** Task 1 **********
let day = "Monday";

switch (day) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
}


console.log('JavaScript’s switch statement is case-sensitive, meaning it treats uppercase and lowercase letters as different characters thats why output is "It\'s a normal day."');





// ********** Task 2 : Build an ATM Cash Withdrawal System **********

let WithdrawAmount = 570;

if (WithdrawAmount % 100 ===0) {
    console.log(`Withdrawal successful : ${WithdrawAmount} has been withdrawn from your account.`);
} else {
    console.log(`Invalid amount : ${WithdrawAmount} Please enter an amount that is a multiples of 100.`);
}