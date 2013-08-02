//Monica Perez - Personal Function - August 1, 2013
// For every person who buys a 30 pack of wet canned pet food
// How much cans of pet food do they go through in one month?; If they are feeding their animals more than one can a day then they need to go out and buy another 24 pack of pet food.

var calcPetFood = function(petFood, days){//naming the variable calcPetFood and setting it to a function, setting that function to store the user input for the variable named petFood and the user input for the variable named days
	var total = petFood * days//naming the variable total and setting it to equal the variable named petFood multiplied by the variable named days
	return total;// returning the total back to the console
}//closing the function
var petFood = prompt("Please enter the number of cans of pet food you use in 1 day.");//naming the variable petFood and prompting the user for information
var days = prompt("Please enter the amount of days in this month.");//naming the variable days and prompting the user to enter information
var print = calcPetFood (petFood, days);

answer = (print > 30) ? "You will use " + print + " cans of petFood this month. You need to purchase at least 1 more pack of pet food for your lovely animal." : "You will use " + print + " cans of petFood this month."
console.log(answer);