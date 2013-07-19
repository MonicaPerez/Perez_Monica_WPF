//Monica Perez - Assignment: Expressions , Wacky - July 18, 2013
//How many calories women can eat a day without gaining weight.
//The calculation for a woman's BMR = 655 + (4.35 * weight in pounds) + (4.7 * height in inches) - (4.7 * age in years)

alert("If you are a woman, we are going to find out your Basal Metabloic Rate (MBR).");// i am alerting the internet user letting them know what the prupose of this page is.
var age = prompt ("Please enter your age."); // setting the variable age to prompt the user to enter there age and saving it into the console for later use
var height = prompt ("Please enter your height in inches."); // setting the variable height to prompt the user to enter there height in inches and saving it into the console for later use
var weight = prompt ("Please enter your weight in pounds."); //setting the variable weight to prompt the user to enter there weight in pounds and saving it into the console for later use
var numberAdded = 655; // I am setting the variable named numberAdded to equal the number 655
var numberHeightYears = 4.7; // I am setting the variable numberHeightYears to equal the number 4.7
var numberWeight = 4.35; // I am setting the variable named numberWeight to equal 4.35

var bMR= numberAdded + (numberWeight * weight) + (numberHeightYears * height) - (numberHeightYears * age) // I am setting the variable named bMR to equal the equation needed to make your basal metabolic rate
console.log ("Your Basal Metabloic Rate (BMR) is " + bMR + ". Meaning even if you sit still all day your body will still burn " + bMR + " calories.") // here I am printing to the console the final answer and letting the user know what that answer means.
