//Monica Perez - Wacky Function - August 1, 2013
// If the user is a male then this will calculate their BMR 

var male = prompt("If you are a male please enter the number 1. If you are a female please enter the numer 5."); // naming the variable male and prompting the user to enter information that will be stored in the variable
var age = prompt("Please enter your age in years.");//naming the variable age and setting it to prompt the user to enter information that will be stored in the variable
var height = prompt("Please enter your height in inches."); // naming the variable height and prompting the user to enter information that will be stored in the variable
var weight = prompt("Please enter your weight in pounds.");//naming the variable weight and setting the variable to prompt the user for information that will be stored in the variable

if(male <= 1){//setting an if else statement; if the variable named male is less than or equal to 1 then the following will happen
	calcMaleBmr(weight, height, age);//invoking the function
	function calcMaleBmr(w,h,a){//setting the function to be named calcMaleBmr and setting it to hold the values for the three variables declared in the previous line
		var maleBmr = 66 + (6.23 * w) + (12.7 * h) - (6.8 * a);//setting the varibale to be named maleBmr and setting that to equal the equation for male basal metabolic rate
		console.log("Your Basil Metabolic Rate (BMR) is " + maleBmr + ".");//printing to the console the statement that would appear if the user input meets the requirements for the if statement
	}//closing the function
}else if(male >= 5){//setting the esle if part of the if else statement. if the variable named male is greater than or equal to 5 than the following will happen
	calcFemaleBmr(weight, height, age);//invoking the function
	function calcFemaleBmr(w,h,a){//setting the function to be named calcFemaleBmr and setting it to hold the value of the functions declared in the pervious line
		var femaleBmr = 655 + (4.35 * w) + (4.7 * h) - (4.7 * a);//setting the variable to be named femaleBmr and setting that to equal the equation for a woman's basal metabolic rate.
		console.log("Your Basil Metabolic Rate (BMR) is " + femaleBmr + ".");//printing to the console the statement if the user input meets the requirements
	}//closing the function
}else{//setting up the last part of the if else statement, if the user input does not meet any of the previous requirments than the following statement will print to the console.
	console.log("I did not understand your input.");//printing to the console the statement that will apply if the user input does not follow the if or else if statements.
}