// Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.
let name = "Pranto Kumar";
let age = 25;
let isStudent = true;
const fProgramingLanguage = ["C", "C++", "JavaScript","Python"];


// Task 2: Print the values to the console.
console.log(name);
console.log(age);
console.log(isStudent);
console.log(fProgramingLanguage);


// Task 3: Try reassigning values to let and const variables and observe errors.

name = "Pk Saha";
console.log(name);

// fProgramingLanguage = ["java", "C#"];
// console.log(fProgramingLanguage); // This will throw an error because fProgramingLanguage is a const variable and cannot be reassigned.



// Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
let person ={
    name:"Pranto Kumar",
    Address: "Uttara, Dhaka",
    age: 25
}


let hobbies = ["Reading", "Coding", "Traveling"];

let info = person;
let hobbiesList = hobbies;

info.age = 27;
hobbiesList.push("Cooking");

// Observe changes in the original variables
console.log(person); 
console.log(hobbies); 