//Monica Perez - July 25, 2013 - Wacky Conditional
//In New Jersey you can recieve your drivers permit at 16 years old. You must drive with a licensed driver who is 21 or older, and has had a license for 3 consecutive years.

var age = prompt("What is your age?");//naming the variable age and assigning a prompt to that variable; asking the user what their age is.
var licensedDriversAge = prompt("How old is the person that is driving with you?");// naming the variable licensedDriversAge and assigning a prompt to ask the user the drivers age

if (age > 17){//setting up the statement saying if the variable age is greater than 17 they can drive with anyone.
	console.log("You are old enough to drive with a licensed driver of any age.");//printing to the console the statement that applies to the if statement in the previous line.
}elese if (age < 17){
	
}
