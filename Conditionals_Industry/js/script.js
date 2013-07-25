//Monica Perez - July 25, 2013 - Industry Conditional
//I am required to work 45 hours a week. If I complete them before Friday, then I will have the weekend off. Else I don't complete them by Friday, then I have to work the weekend
var hoursWorked = prompt("Please enter: How many hours have you worked during the week."); // naming the variable hoursWorked and setting it to equal a prompt to acquire information from the user
var minHours = 45; // setting the variable to be named minHours and assigning it to the value 45. 
var answer; //naming the variable answer and not assigning any value at the moment.
answer = (hoursWorked > minHours) ? "You get the weekend off. Enjoy yourself." : "You do not get the weekend off. Time to get to work."