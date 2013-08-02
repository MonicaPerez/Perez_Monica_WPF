//Monica Perez - Wacky Function - August 1, 2013
// If the user is a male then this will calculate their BMR 

var male = prompt("If you are a male please enter the number 1. If you are a female please enter the numer 5.");
var age = prompt("Please enter your age in years.");
var height = prompt("Please enter your height in inches.");
var weight = prompt("Please enter your weight in pounds.");

if (male = 1){
	calcMaleBmr(weight, height, age);
	function calcMaleBmr(w,h,a){
		var maleBmr = 66 + (6.23 * w) + (12.7 * h) - (6.8 * a);
		console.log("Your Basil Metabolic Rate (BMR) is " + maleBmr + ".");
	}
}else if (male = 5){
	calcFemaleBmr(weight, height, age);
	function calcFemaleBmr(w,h,a){
		var femaleBmr = 655 + (4.35 * w) + (4.7 * h) - (4.7 * a);
		console.log("Your Basil Metabolic Rate (BMR) is " + femaleBmr + ".");
	}
}else{
	console.log("I did not understand your input.")

}
/* 655 + 595.95 + 314.9 - 103.4