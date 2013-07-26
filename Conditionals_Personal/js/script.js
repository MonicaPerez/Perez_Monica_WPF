//Monica Perez - July 25, 2013 - Personal Conditional

//If I eat less than the average calories burned and you burn over 500 calories while exercising than I can treat myself to icecream.
//An average person burns 1300 calories daily, without exercising
//The aver calories of a small icecream is 230 calories.

alert("Can you have some icecream?")
var todayCalorieIntake = prompt("Please enter the number of calories have you eaten today.");//naming the variable todayCalorieIntake assigning it to prompt the user and hold the aquired information.
var averageCaloriesBurnedDaily = 1300; //naming the variable averageCaloriesBurnedDaily and assigning it to the value 1,300.
var exercise = prompt("Please enter the number of calories you burned while exercising."); //setting the variable to be named exercise and assigning that variable to prompt the user and hold the aquired information.
if(todayCalorieIntake < averageCaloriesBurnedDaily && exercise >= 250){//setting an if elese statement and the if part is saying if todayCalorieIntake is less than averageCaloriesBurned and they burned more than 250 calories from exercising then the following statement will print.
	console.log("Yay! You may eat some icecream.");//printing to the console the statement if the first part is correct if not it will proceed to the next statement.
}else{
	console.log("Time to hit the gym!");//Printing to the console the statement that will print if the user does not enther the requirements for the if statement.
}//closing the else if statement