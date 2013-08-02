//Monica Perez - Industry Function - August 1, 2013
//If I own a web designing company and I have 28 projects to work on each consisting of 3 hours and I have 5 employees. How long will this take?

var employees = prompt("Please enter how many employees are schedueled today?"); //naming the variable employees and setting it to prompt the user  for information.
var projects = prompt("Please enter the amount of projects you have to work on.");// naming the variable project and setting it to prompt the user for information.

calcHours (employees, projects);

function calcHours(projects, employees){ //setting up a function to store the variable named project and the variable named employees
	var total = projects / employees ;//naming the variable total and making it equal to the variable projects divided by the variable employees
		if(employees > 4 && projects <= 20){//setting an if statement to say if there are more employees than 4 and less than or equal to 20 projects then the following statement will print to console.
			console.log("It will require " + total + " hours per person to finish all of the projects.")// printing to the console the statement if the previous requirements were met
		}else{//setting the else part of the if statement, if the user input does not meet the requirements of the if statement, then the following statement will print.
			console.log("You should hire more workers.");// printing to the console the statement that will be printed if the if statement is not met.
		}//closing out the else statement
}//closing out the function