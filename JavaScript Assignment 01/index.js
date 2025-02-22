// Chapter#1 "Alert"

// 1. Write a script to greet your website visitor using JS alert
// box.

alert("Welcome to our Webpage");

// 2. Write a script to display following message on your web
// page:

alert("Error! Please enter a valid password");

// 3. Write a script to display following message on your web
// page: (Hint : Use line break)

alert("Welcome to JS Land...\nHappy Coding!");

// 4. Write a script to display following messages in sequence:

alert("Welcome to JS Land...");

alert("Happy Coding\nPrevent this page from creating additional dialogs");

// 5. Generate the following message through browser’s
// developer console:

alert("Hello... I can run JS through my web browser's console");

// Chapter#2 "VARIABLES FOR STRINGS"

// 1. Declare a variable called username.

var username = "Muhammad Ali Raza";

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

var myname = "Muhammad Ali Raza";

console.log (myname);

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message;

message = "Hello World";

alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var studentname = "Muhammad Ali Raza";

var studentage = "15 years old";

var studentqualification = "Certified Mobile Application Developer";

alert(studentname);

alert(studentage);

alert(studentqualification);

// 5. Write a script to display the following alert using one JS
// variable:

var pizza = "Pizza\nPizz\nPiz\nPi\nP ";

alert(pizza);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var emaildescription = "My email address is ";

var email = "mohammedalilakhani@gmail.com";

var fullemail = emaildescription + " " + email;

alert(fullemail); 

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";

var bookdescription = "I am trying to learn from the book";

var bookintro = bookdescription + " " + book;

alert(bookintro);

// 8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript <br> " );

// 9. Store following string in a variable and show in alert and
// browser through JS

var symbol = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";

alert(symbol);

// Chapter#3 "VARIABLES FOR NUMBERS"

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = "I am 29 years old";

alert(age);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visitortrack = "You have visited this site 15 times";

alert(visitortrack);

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthyear = 1995 ;

var birthinfo = "My birth year is";

var birthyearin = birthinfo + " " + birthyear ;

document.write(birthyearin + "<br>" );

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorsName = "Ali";

var productTitle = "T-shirts";

var quantity = "5pcs";

var storeName = "on XYZ Clothing Store";

document.write (visitorsName + " " + "ordered" + " " + quantity + " " + productTitle + " " + storeName + "<br>" + "<br>" + "<br>" );

// Chapter#4 "VARIABLE NAMES: LEGAL & ILLEGAL"

// 1. Declare 3 variables in one statement.

var subject = "Maths", totalMarks = 100, marksobtained= 80;

console.log (subject + totalMarks + marksobtained)

// 2. Declare 5 legal & 5 illegal variable names.

// Legal Variables (Valid)
// A legal variable name follows JavaScript's naming rules:

// Must start with a letter (a-z, A-Z), an underscore _, or a dollar sign $.
// Can contain numbers (0-9) but cannot start with a number.
// Can include uppercase and lowercase letters (JavaScript is case-sensitive).
// Cannot be a reserved keyword (like var, let, function, etc.).
// Cannot contain spaces or special characters except _ and $.

var userName = "Muhammad Ali"; 

var _age = 29;   

var $price = 100; 

var totalAmount123 = 500;

var smit_RollNo = 344578;

console.log (username + _age + $price + totalAmount123 + smit_RollNo);

// Illegal Variables (Invalid)
// A variable is illegal if it violates JavaScript's naming rules:

// Starts with a number (0-9)
// Contains spaces
// Uses special characters other than _ and $
// Uses hyphens (-), which JavaScript interprets as subtraction
// Uses reserved JavaScript keywords

// var 123name = "Ali"; 

// var user-name = "Ali";

// var var = 10;      

// var user name = "Ali"; 

// var for = "Ali";   


// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write ("<b>Rules for naming JS variables</b>" + "<br>" + "<br>" + "<br>");

document.write ("a) Variable names can only contain numbers, $, and _.For example $my_1stVariable" + "<br>");

document.write ("b) Variables must begin with a letter, $ or _. For example $name, _name or name" + "<br>");

document.write ("c) Variable names are case sensitive" + "<br>");

document.write ("d) Variable names should not be JS Keyword" + "<br>" + "<br>"+ "<br>" );

// Chapter # 9-11  "USER INPUT & CONDITIONAL STATEMENT"

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt ("Enter your city");

if (city === "Karachi") {
    alert ("“Welcome to city of lights”")   
} else {
    alert ("Welcome to" + " " + city)
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt ("Enter your gender");

if ( gender === "male") {
    alert("Good Morning Sir")
    
} else if ( gender === "female") {
    alert("Good Morning Ma’am")
   
} else {
    alert("Good Morning")
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

var signalColor = prompt ("Which signal color are you seeing?");

if (signalColor === "red") {
    alert("Must Stop")
    
} else if (signalColor === "yellow"){
    alert("Ready to move")
    
} else if (signalColor === "green"){
    alert("Move now")
} else{
    alert("Wait for Signal")
};

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fuel = +prompt  ("Enter remaining fuel in car (in liters)");

if (fuel <= 0.25 ) {
    alert("Please refill the fuel in your car")
    
} else {
    alert("You have enough fuel to enjoy the ride")   
};

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
console.log("given condition for variable a is true");
};

// ---------------------

var b = 82;
if (b++ === 83){
console.log("given condition for variable b is true");
};

// --------------------- 

var c = 12;
if (c++ === 13){
console.log("condition 1 is true");
}
if (c === 13){
console.log("condition 2 is true");
}
if (++c < 14){
console.log("condition 3 is true");
}
if(c === 14){
console.log("condition 4 is true");
};

// ---------------------

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
console.log("The cost equals");
};

// ---------------------

if (true){
    console.log("True");
    }
    if (false){
    console.log("False");
    };

 // ---------------------

 if("car" < "cat"){
    console.log("car is smaller than cat");
    };

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var urdu = +prompt("Type your Marks obtained in Urdu");

var english = +prompt("Type your Marks obtained in English");

var maths = +prompt("Type your Marks obtained in Maths");

var marksObtained = urdu + english + maths;

var totalMarks = 300;

var percentage = marksObtained/totalMarks * 100;

var grade;

var remarks;

if (percentage >= 89) {
    grade = "A-one"
    remarks = "Excellent"
    
} else if (percentage >= 70) {
    grade = "A"
    remarks = "Good"
    
} else if (percentage >= 60) {
    grade = "B"
    remarks = "You need to improve"

} else {
    grade ="Fail"
    remarks= "Sorry"

}

document.write ("<b>Marks Sheet</b>" + "<br>" + "<br>" + "<br>");

document.write ("Total Marks: " + totalMarks + "<br>");

document.write ("Marks obtained: " + marksObtained + "<br>");

document.write ("Percentage: " + percentage + "%" + "<br>");

document.write ("Grade: " + grade + "<br>") ;

document.write ("Remarks: " + remarks + "<br>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 6;

var userGuess = +prompt("Guess the secret number")

if (secretNumber === userGuess) {
    alert("Bingo! Correct answer")
    
} else if ( secretNumber + 1 === userGuess) {
    alert("Close enough to the correct answer")
    
} else (
    alert("Better Luck next time")
)

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var oddNumber = +prompt ("Enter a number to check if it's divisible by 3");

if (oddNumber % 3 === 0) {
    alert(oddNumber + " is divisible by 3 ");

} else {
    alert(oddNumber + " is NOT divisible by 3 ");

}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var evenNumber = +prompt ("Enter a number to check if it's Even or Odd");

if (evenNumber % 2 === 0) {
    alert(evenNumber + " is an Even number");

} else {
    alert(evenNumber + " is an Odd number");

}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt ("Enter the temperature here");

if (temperature > 40) {
    alert("It is too hot outside.")
    
} else if (temperature > 30) {
    alert("The Weather today is Normal.")
    
} else if (temperature > 20) {
    alert("Today’s Weather is cool.")

} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.")

}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = +prompt("Enter first number to calculate");

var operation = prompt("Enter the operation (+, -, *, /, %):")

var secondNumber = +prompt("Enter second number to calculate");

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
    alert(result + "is answer");

} else if (operation === "-") {
    result = firstNumber - secondNumber;
    alert(result + "is answer");

} else if (operation === "*") {
    result = firstNumber * secondNumber;
    alert(result + "is answer");
 
}  else if (operation === "/")  {
    result = firstNumber / secondNumber;
    alert(result + "is answer")

}  else if (operation === "%") {
    result = firstNumber % secondNumber;
    alert(result + " is answer")
}

// Chapter # 12-13 (IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var inputVariable = prompt ("Enter variable of your choice");

var ascii = inputVariable.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    alert(inputVariable + " is a Number (0-9) ");

} else if (ascii >= 65 && ascii <= 90) {
    alert(inputVariable + " is an Uppercase Letter (A-Z) ");

} else if (ascii >= 97 && ascii <= 122) {
    alert(inputVariable + " is a Lowercase Letter (a-z) ");

} 