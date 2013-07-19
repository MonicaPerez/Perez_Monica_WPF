//Monica Perez - Assignment: Expressions, Personal - July 18, 2013
//The goal is to figure out how many dollars I have from all the quarters all over my house.

var quarterPlaces = [23, 13, 4, 7]; // setting the variable quarterPlaces to equal an array of numbers. Each number is equal to the number of quarters I've found in each room in my house
var totalDollars = (quarterPlaces[0] + quarterPlaces[1] + quarterPlaces[2] + quarterPlaces[3] / 4); //here I m finding out how many dollars there are by adding all of the quarters together and then dividing it by 4.
console.log("There are " + totalDollars + " dollars in quarters."); //printing to the console text and the variable followed by more text giving the anser.