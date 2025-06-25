// Task : 1

for (let i = 1; i <= 5; i++) {
    let string = "";  //every line start empty string 
    for (let j = 1; j <= i; j++) {
        string += "* ";
    }
    console.log(string);
}




// Task : 2

let b = 6;
for (let i = 1; i <= 10; i++) {
    console.log(b + " x " + i + " = " + (b * i));
}




// Task : 3

let sum = 0;

for (let i = 1; i <= 500; i++) {
    if (i % 2 != 0) {
        sum += i; // Add odd numbers to sum
    }
}
console.log("Sum of odd numbers from 1 to 500 is: " + sum);




// Task : 4

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}



// Task : 5

let n = 6789;
let reverse = 0;

while (n > 0) {
    let digit = n % 10; 
    reverse = reverse * 10 + digit; 
    n = Math.floor(n / 10); 
}
console.log("Reverse of 6789 is: " + reverse);


// Task : 6

console.log(" Task 6: differences between for, while, and do-while loop see the index.html file.");