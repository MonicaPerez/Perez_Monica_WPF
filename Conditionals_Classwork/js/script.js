//Monica Perez - July 25, 2013 - Conditionals Worksheet

//If or Else Condtion

//sunny = true;
if (sunny){
	goToTheBeach();

	if(warmWater){
		wearNewSuit();
}
}else{ 
	goToTheMovies();
}


temp = 82
if(temp>70){
	goToTheBeach
}

//Conditional Logic

var oldEnough = true;
//if the is old enough, print to the console "you can ride!"
if(oldEnough){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}

// Conditional Logic - Relational Expressions

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;
if (kidHeight + sneakerLift > minHeight){
	console.log("You can ride the coaster!")
}//Conditional Logic - With an Expression

var kidHeight = 52;
var minHeight = 48;
if (kidHeight > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}else{
	//code performed if condition is false
	console.log("Sorry kid, you've got some growing to do.");
}

//Conditional Logic - else if

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; // the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//you can ride!
	console.log("You can ride the coaster!");
}else if (kid height > wParentHeight){
	//you can ride with a parent present
	console.log("You can ride, but only with a parent present.");
}else{
	//sorry you have growing to do
	console.log("Sorry kid you've got some growing to do first!");
}

//Conditional Logic - Logical Operators - && and

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;
//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
	console.log("We can buy the phone!")
}else{
	console.log("No phone for you!!")
}

// Conditional Logic - Logical Operators - || or

var budget = 300;
var iPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget || wonLottery){
	console.log("We can buy the phone!")
}else{
	console.log("No phone for you!!")
}

//Ternaries - Decision making on one line
if(condition){
	do if true;
}else{
	do if false;
}

(condition) ? do if ture : do if false

var gpa = 48;
//if the gpa is over the min 2.0 score the student can graduate

if(gpa >2.0){
	console.log("You can graduate!");
}else{
	console.log("GPA is too low!")
}

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low!")

var age = 11;
var book;

if(age < 10){
	book = "Green Eggs and Ham";
}else{
	book = "The Time Machine";
}

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

//if the child is under 10, they get green eggs and ham, otherwise they get the time machine


