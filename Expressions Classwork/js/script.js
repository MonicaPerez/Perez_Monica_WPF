//Monica Perez - July 18, 2013 - Expressions Classwork

var yearBorn = 1955;


console.log("Hello World");
console.log(yearBorn);

alert(yearBorn);


//Defining Variables
var age; // declaration
age = 38; //definition
//Storage containers = value

var yearOfBirth = 1907; //declaring and defining on the same line

//Variables of different types, numbers, booleans, and strings

var age = 39; // Number variable
var isStudent = false; // Boolean Variable

var kermit = "my friend";
var firstName = "Kermit";
var phrase = "I don't know";

//Arrays

/*var muppetName = ["Kermit" . "Miss Piggy"]; //0. 1. 2. 3

muppetNames[1] = "Rizzo"; // change index #1 to Rizzo
muppetNames[2] = "Fozzy";

var num = 1;

console.log(muppetNames[num]); //lets me see what is in the index #1*/

//Expressions

var a = 2;//sets up our variable and defines it with 2
a = a + 3; // add 3 to a
console.log(a);


//Expressions - Age Example

var yearBorn = 1974;
var age = 2013 - yearBorn;
console.log(age);

//Expressions - Arithmetic Operators
 
//Area of the triangle is half of the width times the height
var width = 4;
var height = 5;
var area = width * height/2;
console.log(area);

// Expressions with Arrays

var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);

//Expressions - Concatenating Strings

var fistNames = "Kermit";
var lastName = "The Frog";
var fullName = firstName + " " + lastName;

console.log(fullName);

var a = "6";
var b = "7";

var result = a + b;
console.log(result);


//Expressions - Assignment Operators

var a = 3;
a += 1; // a = a + 4
//a ++ //a = a + 1 // a += 1
console.log(a);


//Prompt and Alert

var userInput = prompt("Enter your year of birth:");
console.log(userInput);

var width = prompt("We are calculating the area of a rectangle. Please enter the width.");
var height = prompt("Please enter the height.");
var area = width * height; // calculates with that info
//console.log(area); // prints it out to the console
var result = "The area of your rectangle is " + area + " sq feet";
alert(result);








