//Monica Perez - Wacky Function - August 1, 2013
// If the user is a male then this will calculate their BMR 

var male = prompt("If you are a male please enter the number 1. If you are a female please enter the numer 5."); // naming the variable male and prompting the user to enter information that will be stored in the variable
var age = prompt("Please enter your age in years.");//naming the variable age and setting it to prompt the user to enter information that will be stored in the variable
var height = prompt("Please enter your height in inches."); // naming the variable height and prompting the user to enter information that will be stored in the variable
var weight = prompt("Please enter your weight in pounds.");//naming the variable weight and setting the variable to prompt the user for information that will be stored in the variable

if(male <= 1){//setting an if statement; if the variable named male is less than or equal to 1 then the following will happen
	calcMaleBmr(weight, height, age);//invoking the function
	function calcMaleBmr(w,h,a){//setting the function to be named calcMaleBmr and setting it to hold the values for the three variables declared in the previous line
		var maleBmr = 66 + (6.23 * w) + (12.7 * h) - (6.8 * a);//setting the varibale to be named maleBmr and setting that to equal the equation for male basal metabolic rate
		console.log("Your Basil Metabolic Rate (BMR) is " + maleBmr + ".");
	}
}else if(male >= 5){
	calcFemaleBmr(weight, height, age);
	function calcFemaleBmr(w,h,a){
		var femaleBmr = 655 + (4.35 * w) + (4.7 * h) - (4.7 * a);
		console.log("Your Basil Metabolic Rate (BMR) is " + femaleBmr + ".");
	}
}else{
	console.log("I did not understand your input.");
}