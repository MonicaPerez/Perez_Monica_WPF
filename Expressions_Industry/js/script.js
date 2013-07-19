//Monica Perez - Expressions Assignment: Industry - July 18, 2013
//I am trying to find out how many hours per week a person has of free time.

var hoursWorkedWeekly = prompt("Hello. Please enter the amount of hours you work weekly."); //setting hoursWorkedWeekly to prompt the user and ask them to enter the amount of hours they work a week.
var daysWeekWorked = prompt("Thank you. Now, please enter how many days a week you work.");// setting daysWeekWorked to ask the user a question that will be held in the variable.
var hoursWorkedDaily = hoursWorkedWeekly / daysWeekWorked; //Setting hoursWorkedDaily to be equal to hoursWorkedWeek divided by daysWeekWorked
var hoursPerDay = 24; // the variable is named hoursPerDay and it is holding the number value of 24.
var hoursFreeDaily = hoursPerDay - hoursWorkedDaily; // the variable is named hoursFreeDaily and is equal to the variable hoursPerDay subtracted by the variable hoursWorkedDaily
var daysPerWeek = 7; // the variable named daysPerWeek is equal to the value of 7
var hoursFreeWeekly = hoursFreeDaily * daysPerWeek;// the variable named hoursFree is equal to the variable hoursFreeDaily multiplied by the variable daysPerWeek
console.log("You have " + hoursFreeWeekly + " hours available for free time every week.") //printing to the console how many free hours the user has weekly with combining text and a variable and then some more text