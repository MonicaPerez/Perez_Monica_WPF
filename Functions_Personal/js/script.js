//Monica Perez - Personal Function - August 1, 2013
// For every person who buys a 30 pack of wet canned pet food
// How much cans of pet food do they go through in one month?; If they are feeding their animals more than one can a day then they need to go out and buy another 24 pack of pet food.

var calcPetFood = function(petFood, days){//naming the variable calcPetFood and setting it to a function, setting that function to store the user input for the variable named petFood and the user input for the variable named days
	var total = petFood * days 
	return total;
}
var petFood = prompt("Please enter the number of cans of pet food you use in 1 day.");
var days = prompt("Please enter the amount of days in this month.");
var print = calcPetFood (petFood, days);

answer = (print > 30) ? "You will use " + print + " cans of petFood this month. You need to purchase another 30 pack of pet food for your lovely animal." : "You will use " + print + " cans of petFood this month."
console.log(answer);