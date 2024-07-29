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
//Question # 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//Answer # 11
let Fahad = ['Hassan', 'Imran', 'Sohail'];
for (let i = 0; i < Fahad.length; i++) {
    console.log(Fahad[i]);
}
// Question # 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//Answer # 12
let Fahad1 = ['Hassan', 'Imran', 'Sohail'];
const Khan1 = 'Welcome to Typescript Class: ';
for (let i = 0; i < Fahad1.length; i++) {
    console.log(Khan1 + Fahad1[i]);
}
// Question # 13
let transportation = ['Motorcylce', ' Car', 'Trani'];
for (let i = 0; i < transportation.length; i++) {
    console.log('I world like to own a' + transportation[i]);
}
//Question # 14
let Guest_list = ['Hassan', 'Imran', 'Afzal'];
for (let i = 0; i < Guest_list.length; i++)
    console.log('\nDear Mr. ' + Guest_list[i] + ',\n\nI would like to invite you in a party.\n\nThanking You!');
// Question # 15
let guest_List1 = ['Imran', 'Asif', 'Zardari'];
// for(let i=0; i<guest_List1.length; i++){
//     console.log('Dear Mr. ' + guest_List1[i] + ', \n\nIt is our pleasure to invite you in our party.\n\nThank You!' )
// }
let absent_Guest = 'Imran';
let new_Guest = 'Kamran';
guest_List1[0] = new_Guest;
for (let i = 0; i < guest_List1.length; i++) {
    console.log('Dear Mr. ' + guest_List1[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Mr. ${absent_Guest} is not coming.`);
//Program Examples
let PakTeam = ['Shahid', 'Imran', 'Razzak', 'Babar', 'Wasim'];
let newplayer = ['Shoaib', 'Sohail', 'Naseem'];
let notplay = ['Shahid', 'Imran', 'Razzak', 'Babar', 'Wasim'];
PakTeam[1] = newplayer[1];
for (let i = 0; i < PakTeam.length; i++) {
    console.log('You Are Select Mr. ' + PakTeam[i] + ' and you are playing 11');
}
console.log(`Mr. ${notplay[1]} you are not selected in Playing 11`);
//Program Examples 2
let WorldXi = ['Saeed', 'Gilcrist', 'Ricky', 'Kalis', 'Wasim'];
WorldXi.push('Aamir');
let Reserve = ['Sachin', 'Brian', 'Shoaib', 'McGrath', 'Shane'];
let notP = ['Saeed', 'Gilcrist', 'Ricky', 'Kalis', 'Wasim'];
notP.push('Aamir');
WorldXi[5] = Reserve[2];
for (let i = 0; i < WorldXi.length; i++) {
    console.log('Congratulation! \n Mr. ' + WorldXi[i] + ',\nYou are selected in Playing XI');
}
console.log(`Mr. ${notP[5]} You are not selected`);
//Program # 16 
//	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestlist2 = ["Shahid", "Imran", "Sohail", "Sajjad"];
let dontCome = guestlist2[0];
console.log(dontCome, " Nhi Arahe Hain");
guestlist2.splice(0, 1, "Hassan");
console.log("Good News! we have found a bigger table");
guestlist2.unshift("Ali");
guestlist2.push("Umar");
let middleindex = Math.floor(guestlist2.length / 2);
guestlist2.splice(middleindex, 0, "Adnan");
console.log("Updated list of our Guests");
guestlist2.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner wiht me`));
//Program # 17
let newprog = ['Hassan', 'Ali', 'Raheel', 'Farrukh', 'Asif'];
for (let i = 0; i < newprog.length; i++) {
    console.log('Dear Mr. ' + newprog[i] + ' \nYou are invite in our party');
}
console.log('\n Sorry we cannot arrange big table, only Two persons will be invited');
while (newprog.length > 2) {
    let newlist = newprog.pop();
    console.log(`Sorry Mr. ${newlist}, you are not invited due to unavalibilty of table`);
}
for (let i = 0; i < newprog.length; i++) {
    console.log('Dear Mr. ' + newprog[i] + '\nYou are Invited to Party\n\n Thank You!');
}
newprog.splice(0, 2);
console.log(newprog);
//Program # 18	
//Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
let places = ['Karachi', 'Islamabad', 'Agra', 'Bihar', 'lahore'];
//Print your array in its original order.
console.log(places);
//Print your array in alphabetical order without modifying the actual list.
console.log([...places].sort());
//Show that your array is still in its original order by printing it.
console.log(places);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log([...places].sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log(places);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log(places.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(places.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log(places.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(places.sort().reverse());
//Program # 19
//	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Program # 25
console.log("-----------------------------------------");
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let AlienColor = "Green";
if (AlienColor === "Green") {
    console.log("You earned 10 Points");
}
if (AlienColor === "Yellow") {
    console.log("You Earned 20 Points");
}
if (AlienColor === "Red") {
    console.log("You Earned 20 Points");
}
//Program # 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let AlienColor1 = "Green";
if (AlienColor1 === "Green") {
    console.log("you earned 5 points");
}
else {
    console.log("you earned 10 points");
}
//version # 2
let AlienColor2 = "Blue";
if (AlienColor2 === "Green") {
    console.log("you earned 5 points");
}
else {
    console.log("you earned 10 points");
}
//Program # 27
console.log("-----------------------------------------");
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//Version - 1
let AlienColor3 = "Green";
if (AlienColor3 === "Green") {
    console.log("You earned 5 Points");
}
else if (AlienColor3 === "Yellow") {
    console.log("You Earned 10 Points");
}
else if (AlienColor3 === "Red") {
    console.log("You Earned 15 Points");
}
else {
    console.log("Sorry, you earned 0 Points");
}
//Version - 2
let AlienColor4 = "Yellow";
if (AlienColor4 === "Green") {
    console.log("You earned 5 Points");
}
else if (AlienColor4 === "Yellow") {
    console.log("You Earned 10 Points");
}
else if (AlienColor4 === "Red") {
    console.log("You Earned 15 Points");
}
else {
    console.log("Sorry, you earned 0 Points");
}
//Version - 3
let AlienColor5 = "Red";
if (AlienColor5 === "Green") {
    console.log("You earned 5 Points");
}
else if (AlienColor5 === "Yellow") {
    console.log("You Earned 10 Points");
}
else if (AlienColor5 === "Red") {
    console.log("You Earned 15 Points");
}
else {
    console.log("Sorry, you earned 0 Points");
}
//Program # 28
console.log("-----------------------------------------");
let personAge = 1;
if (personAge <= 2 && personAge > 0) {
    console.log("You are Baby Right now");
}
else if (personAge < 4 && personAge >= 2) {
    console.log("You are toddler Right now");
}
else if (personAge < 13 && personAge >= 4) {
    console.log("You are kid Right Now");
}
else if (personAge < 20 && personAge >= 13) {
    console.log(" You are Teenager Right Now");
}
else if (personAge < 65 && personAge >= 20) {
    console.log("You are Adults Right Now");
}
else if (personAge >= 65) {
    console.log("You are an Elder Right Now");
}
else {
    console.log("Please Enter Your Age");
}
//Program # 29
console.log("-----------------------------------------");
//Creating Array
let favorite_fruits = ["Mango", "Strawbery", "Orange"];
if (favorite_fruits.includes("Mango")) {
    console.log("I really like Mango");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I Really Like Orange");
}
//Program # 30
console.log("-----------------------------------------");
//Creating Array
let usernames1 = ["Mahad", "Ali", "Zeeshan", "Admin", "Hassan"];
// using For Each Loop on Array
usernames1.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thanks you for logging in again`);
    }
});
//Program # 31
console.log("-----------------------------------------");
let usernames2 = ["Mahad", "Ali", "Zeeshan", "Admin", "Hassan"];
// usernames2 = []
if (usernames2.length === 0) {
    console.log("Your Array in Empty we need to find some users!");
}
else {
    // using For Each Loop on Array
    usernames2.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, thanks you for logging in again`);
        }
    });
}
//Program # 32
console.log("-----------------------------------------");
//Array of Current Users
let current_users = ["Hassan", "Sohail", "Adnan", "Zain", "Shahood"];
// Array of New Users
let new_users = ["Danish", "Kashif", "Hassan", "Zain", "Adnan"];
//Loop through new_user to check for usernames avaliblity 
new_users.forEach(new_one_user => {
    //Making a condition for username already exist and save in our_condition variable 
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This UserName ${new_one_user} is available`);
    }
});
// Program # 33
//Store the numbers 1 through 9 in a array and use the if else chain inside the loop to print the number 1st to 9th.
console.log("-----------------------------------------");
let oNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let a = 0; a < oNums.length; a++) {
    if (oNums[a] === 1) {
        console.log(`${oNums[a]}st`);
    }
    else if (oNums[a] === 2) {
        console.log(`${oNums[a]}nd`);
    }
    else if (oNums[a] === 3) {
        console.log(`${oNums[a]}rd`);
    }
    else if (oNums[a] === 4) {
        console.log(`${oNums[a]}th`);
    }
    else if (oNums[a] === 5) {
        console.log(`${oNums[a]}th`);
    }
    else if (oNums[a] === 6) {
        console.log(`${oNums[a]}th`);
    }
    else if (oNums[a] === 7) {
        console.log(`${oNums[a]}th`);
    }
    else if (oNums[a] === 8) {
        console.log(`${oNums[a]}th`);
    }
    else if (oNums[a] === 9) {
        console.log(`${oNums[a]}th`);
    }
}
;
//Question # 34
console.log("-----------------------------------------");
let Pizzas = ["Fajita", "BBQ", "Maxica"];
for (let i = 0; i < Pizzas.length; i++) {
    console.log(`I Like Pizza ${Pizzas[i]}`);
}
console.log(`I Really Love Pizzas`);
// Question # 35
console.log("-----------------------------------------");
let petAnimal = ["Horse", "Cat", "Parrot"];
for (let i = 0; i < petAnimal.length; i++) {
    console.log(`A ${petAnimal[i]} would make a great pet Animal`);
}
console.log("\nAny of these animals would make a great pet!");
// Question # 36
console.log("------------------------");
function make_Shirt(size, message) {
    console.log(`on ${size} size of shirt, ${message} is printed`);
}
make_Shirt("Large", "Have a nice day");
make_Shirt("Small", "Have a Good day");
make_Shirt("Medium", "Have a Sunny Day");
// Question # 37
console.log("------------------------");
function makeShirt(size = "Large", message = "I Love TypeScript") {
    console.log(`on ${size} size of shirt, ${message} is printed`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "I Love AI");
// Question # 38
console.log("------------------------");
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describeCity("Karachi");
describeCity("London", "England");
describeCity("Sydney", "Australia");
// Question # 39
console.log("------------------------");
function city_Country(city, country) {
    return (`${city}, ${country}`);
}
console.log(city_Country("Karachi", "Pakistan"));
console.log(city_Country("Sydney", "Australia"));
console.log(city_Country("Newyork", "USA"));
// Question # 40
console.log("------------------------");
function makeAlbum(artist_name, album_title, track) {
    const album = {
        artist: artist_name,
        title: album_title
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
const album1 = makeAlbum('Artist-1 ALi Header', 'Album 1');
const album2 = makeAlbum('Artist-2 Sajjad Ali', 'Album 2');
const album3 = makeAlbum('Artist-3 Mehdi Hassan', 'Album 3', 5);
console.log(album1);
console.log(album2);
console.log(album3);
//Question No. 41
console.log("------------------------");
let magician = ["Magician -1", "Magician - 2", "Magician - 3", "Magician - 4"];
function show_magicians(magicians) {
    magicians.forEach(Hassan => {
        console.log(Hassan);
    });
}
show_magicians(magician);
console.log("------------------------");
function add(x, y) {
    return x + y;
}
console.log(add(5, 3));
// Exersise # 42 (Greet Magician)
console.log("----------------------------");
let magician1 = ["Magician -1", "Magician - 2", "Magician - 3", "Magician - 4"];
function make_greet(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician1[i] = "The Greet " + magicianArry[i];
    }
}
function show_magicians1(magicians) {
    magicians.forEach(Hassan => {
        console.log(Hassan);
    });
}
make_greet(magician1);
show_magicians1(magician1);
// Question # 43
console.log("----------------------");
let magician2 = ["Magician -1", "Magician - 2", "Magician - 3", "Magician - 4"];
function Copyarry(Arr) {
    return [...Arr];
}
function make_greet1(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = "The Greet " + magicianArry[i];
    }
}
function show_magicians2(magicians) {
    magicians.forEach(Hassan => {
        console.log(Hassan);
    });
}
const copyMagicianArray = Copyarry(magician2);
make_greet1(copyMagicianArray);
console.log("This is my Original Array");
show_magicians2(magician2);
console.log("\n\n This is my modify copy of the array");
show_magicians2(copyMagicianArray);
// Exercise # 44
function makeSandwich(item) {
    console.log('\nMaking your sandwich wiht:');
    item.forEach(element => console.log("- " + element));
    console.log('Enjoy your sandwich !\n');
}
makeSandwich(['Ham', 'Cheese', "Butter"]);
makeSandwich(['Russias', 'Bacon']);
makeSandwich(['peenut butter', 'Bake']);
