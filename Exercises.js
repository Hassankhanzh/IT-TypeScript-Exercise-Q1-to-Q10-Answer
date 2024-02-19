"use strict";
// Question # 1 
// Install Node.js, TypeScript and VS Code on your computer.
// Answer # 1
// Installed in the Laptop
// Question # 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// Answer # 2
let Person = 'Eric';
console.log(`"Hello ${Person}, would you like to learn some Python today?”`);
// Question # 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Answer # 3
let Personname = 'Hassan Khan';
let uppercase = Personname.toUpperCase();
let lowercase = Personname.toLowerCase();
let titlecase = Personname.split(' ').map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(' ');
console.log(Personname);
console.log(uppercase);
console.log(lowercase);
console.log(titlecase);
// Question # 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//Answer # 4
let Famous_Person = 'Albert Einstein once said, “A person who never made a mistake never tried anything new.”';
console.log(Famous_Person);
// Question # 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Answer # 5
let FamousPerson = 'Albert Einstein';
let message = '"A person who never made a mistake never tried anything new."';
console.log(`${FamousPerson} once said, ${message}`);
// Question # 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//Answer # 6
const Governor = '    \n\t Governor Sindh Kamran Tassori\t\n    ';
console.log(Governor);
//Without white spacing
const GovernorSind = Governor.trim();
console.log(GovernorSind);
// Question # 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(6 + 2);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Question # 8
// You should create four lines that look like this:
// console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.
console.log(4 + 4);
console.log(15 - 7);
console.log(8 * 1);
console.log(64 / 8);
//Question # 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//Answer # 9
const favorite_Number = 6;
const Msg = 'Your Favorite Number is ' + favorite_Number;
console.log(Msg);
//Question # 10
//	Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Answer # 10
// First Program Written By Hassan Khan
// Date : 18-02-2024
console.log('Hello World!');
// Second Program Written By Hassan Khan
// Date : 18-02-2024
console.log(6 * 2 + 2 + 2);
