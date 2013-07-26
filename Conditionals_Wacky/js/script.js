//Monica Perez - July 25, 2013 - Wacky Conditional
//In New Jersey you can recieve your drivers permit at 16 years old. You must drive with a licensed driver who is 21 or older, and has had a license for 3 consecutive years.

var age = prompt("Please enter your age?");//naming the variable age and assigning a prompt to that variable, asking the user what their age is.
var licensedDriversAge = prompt("Please enter the age of the licensed driver that is with you?");// naming the variable licensedDriversAge and assigning a prompt to ask the user the drivers age

if (age >= 17){//setting up the rule for the else if statement saying if the variable age is greater than 17 they can drive with anyone.
	console.log("You are old enough to drive with a licensed driver of any age.");//printing to the console the statement that applies to the if statement in the previous line.
}else if (age < 16){//stating that if the first rule does not apply then this rule might apply. if the variable age is less than 16 then the following statement will print to the console.
	console.log("Sorry you are not old enough to drive.");//printing to the console the statement if the previous line is true
}else if (age = 16 && licensedDriversAge >= 21){//if the previous two statements do not apply then it moves onto this statement which states if the variable age is equal to 16 and the variable licensedDriversAge is greater than or equal to 21 then the following statement will print to the console.
	console.log("You can drive only if the licensed driver has had their license for 3 consecutive years.");
}else{//stating if none of the pervious statements apply then the following is to print to the console.
	console.log("You are old enough to drive by yourself");// printing to the console the statement if none of the previous rules applied to the user's input
}//closing out the else if statement
