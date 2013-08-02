//Monica Perez - Wacky Function - August 1, 2013
// If the user is a male then this will calculate their BMR 

var male = prompt("If you are a male please enter the number '1'. If you are a female please enter the numer '2'.");
var age = prompt("Please enter your age in years.");
var height = prompt("Please enter your height in inches.");
var weight = prompt("Please enter your weight in pounds.");

if (male = 1){
	calcMaleBmr(weight, height, age);
	function calcMaleBmr(w,h,a){
		var maleBmr = 66 + (6.23 * w) + (12.7 * h) - (6.8 * a);
		console.log("Your Basil Metabolic Rate (BMR) is " + bmr + ".");
	}
}