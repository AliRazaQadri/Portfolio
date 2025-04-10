// CHAPTER # 5 ( MATH EXPRESSIONS )

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var firstAddNum= +prompt  ("Enter first num to add");

var secondAddNum= +prompt  ("Enter second num to add");
 
var addAns = firstAddNum + secondAddNum ;

document.write ("Sum of " + firstAddNum + " and " + secondAddNum + " is " + addAns + "<br>" );

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// Subtraction;

var firstSubNum= +prompt  ("Enter first num to subtract from");

var secondSubNum= +prompt  ("Enter second num to subtract from");
 
var subAns = firstSubNum - secondSubNum ;

document.write ("The difference of " + firstSubNum + " and " + secondSubNum + " is " + subAns + "<br>" );

// Multiplication;

var firstMulNum= +prompt  ("Enter first num to multiply");

var secondMulNum= +prompt  ("Enter second num to multiply");
 
var mulAns = firstMulNum * secondMulNum ;

document.write ("The product of " + firstMulNum + " and " + secondMulNum + " is " + mulAns + "<br>" );

// Division;

var firstDivNum= +prompt  ("Enter first num to divide");

var secondDivNum= +prompt  ("Enter second num to divide");
 
var divAns = firstDivNum / secondDivNum ;

document.write ("The quotient of " + firstDivNum + " and " + secondDivNum + " is " + divAns + "<br>" );

// Modulus;

var firstModNum= +prompt  ("Enter first num to find the remainder of");

var secondModNum= +prompt  ("Enter second to find the remainder of");
 
var modAns = firstModNum % secondModNum ;

document.write ("The remainder of " + firstModNum + " and " + secondModNum + " is " + modAns + "<br>" );

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

var num;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.

document.write("Value after variable declaration is: " + num + "<br>");

// c. Initialize the variable with some number.

var num = 5;

// d. Show the value of variable in your browser like “Initial
// value: 5”.

document.write("Initial value: " + num + "<br>")

// e. Increment the variable.

num++ ;

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.

document.write("Value after increment is: " + num + "<br>");

// g. Add 7 to the variable.

num = num + 7 ;

// h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write("Value after addition is: " + num + "<br>");

// i. Decrement the variable.

num = num - 1 ;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.

document.write("Value after decrement is: " + num + "<br>");

// k. Show the remainder after dividing the variable’s value
// by 3.

var remainder = num % 3 ;

// l. Output : “The remainder is : 0”.

document.write("The remainder is: " + remainder + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticketPrice = 600;

var totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets is: " + totalCost + " PKR" + "<br>");

// 5. Write a script to display multiplication table of any
// number in your browser. 

var number = 12;

document.write("<h3>Multiplication Table of " + number + ":</h3>" + "<br>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>" + "<br>");
  } 

//   6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.

var celsiusTemp = 30;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”.

var fahrenheitTemp = (celsiusTemp * 9/5) + 32;

document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F" + "<br>");

// c. Now store a Fahrenheit temperature into a variable.

var fahrenheitTemp2 = 86;

// d. Convert it to Celsius & output “NNoF is NNoC”.

var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;

document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C" + "<br>"+ "<br>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

let item1Price = 650;

let item2Price = 200;

let orderQuantity1 = prompt("Enter the quantity of Item 1 you want to order");

let orderQuantity2 = prompt("Enter the quantity of Item 2 you want to order");

let shippingCharges = 100;

let totalCostItem = (item1Price * orderQuantity1) + (item2Price * orderQuantity2) + shippingCharges;

document.write ("<h1>Shopping Cart</h1>" + "<br>" + "<br>");

document.write ("Price of Item 1 is " + item1Price + "<br>");

document.write ("Quantity of Item 1 is " + orderQuantity1 + "<br>");

document.write ("Price of Item 2 is " + item2Price + "<br>");

document.write ("Quantity of Item 2 is " + orderQuantity2 + "<br>");
 
document.write ("Shipping Charges " + shippingCharges + "<br>" + "<br>");

document.write ("Total Cost of your order is " + totalCostItem);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

let totalMarks = 980;

let totalMarksObtained = prompt("Enter your obtained marks here");

let marksPercentage = totalMarksObtained/totalMarks * 100;

document.write("<h1>Marks Sheet</h1>" + "<br>");

document.write("Total Marks: " + totalMarks + "<br>");

document.write("Marks Obtained: " + totalMarksObtained + "<br>");

document.write("Percentage: " + marksPercentage + "%" + "<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let totalPKR = (10 * 104.80) + (25 * 28);

document.write("<h1>Currency in PKR</h1>" + "<br>" );

document.write("Total Currency in PKR: " + totalPKR);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num = 8;

var result = ((num + 5) * 10) / 2;

document.write("Final result: " + result + "<br>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.

let currentYear = 2025;

// b. Store their birth year in a variable.

let birthYear = 1995;

// c. Calculate their 2 possible ages based on the stored
// values.

let age1 = currentYear - birthYear;
let age2 = age1 - 1;

// Output them to the screen like so: “They are either NN or NN years old”.

document.write("<h1>Age Calculator</h1>"+ "<br>")

document.write("Current Year: " + currentYear + "<br>")

document.write("Birth Year: " + birthYear + "<br>")

document.write("Your Age is: " + age1 + " / " + age2 + "<br>")

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

let radius = 20;

let pi = 3.142;

let circumference = 2 * pi * radius;

let area = pi * radius * radius;

document.write("<h1>The Geometrizer</h1>" + "<br>");

document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable

let favoriteSnack = "Choclate Chip";

// b. Store your current age into a variable.

let currentAge = 15;

// c. Store a maximum age into a variable.

let maxAge = 65;

// d. Store an estimated amount per day (as a number).

let amountPerDay = 3;

// e. Calculate how many would you eat total for the rest of
// your life.

let yearsRemaining = maxAge - currentAge;
let totalNeeded = yearsRemaining * 365 * amountPerDay;

// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>");

document.write("Favourite Snack: " + favoriteSnack + "<br>");

document.write("Current Age; " + currentAge + "<br>");

document.write("Estimated Max Age: " + maxAge + "<br>");

document.write("Amount of snacks per day: " + amountPerDay + "<br>");

document.write("You will need " + totalNeeded + " to last you until the ripe old age of " + maxAge + "<br>"+ "<br>")


// Chapter # 6 to 9  (Math Expression)

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10

document.write("Result:" + "<br>");

document.write("The value of a is: " + a+ "<br>");
document.write("----------------------------" + "<br>"+ "<br>")

++a;

document.write("The value of ++a is: " + a + "<br>");
document.write("now the value of a is: " + a + "<br>" + "<br>");

document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("now the value of a is: " + a + "<br>" + "<br>");

--a;

document.write("The value of --a is: " + a + "<br>");
document.write("now the value of a is: " + a + "<br>" + "<br>");

document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("now the value of a is: " + a + "<br>" + "<br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2, b = 1;

--a;
console.log(a, "output1");

--a - --b;
console.log(a, b, "output2");

--a - --b + ++b;
console.log(a, b, "output3");

--a - --b + ++b + b--;
console.log(a, b, "output4");

var result = --a - --b + ++b + b--;

document.write("a is " + a + "<br>")
document.write("b is " + a + "<br>")
document.write("resuly is " + result + "<br>")


// 3. Write a program that takes input a name from user &
// greet the user.

let userName = prompt("What is your name?");

alert("Hello, " + userName + "! Welcome!");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var number = prompt("Enter a number to display its multiplication table:", "5");

    if (number === null || number === "") {
      number = 5;
    } else {
      number = Number(number); 
    }

    document.write("<h1>Multiplication Table of " + number + "</h1>");
    for (var i = 1; i <= 10; i++) {
      document.write(number + " × " + i + " = " + (number * i) + "<br>" + "<br>");
    }


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.

var subject1 = prompt("Enter name of Subject 1:");
var subject2 = prompt("Enter name of Subject 2:");
var subject3 = prompt("Enter name of Subject 3:");

// b) Total marks for each subject is 100, store it in another
// variable.

var totalMarksPerSubject = 100;

// c) Take obtained marks for first subject from user and
// stored it in different variable.

var obtained1 = +prompt("Enter obtained marks for " + subject1 + ":");

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.

var obtained2 = +prompt("Enter obtained marks for " + subject2 + ":");
var obtained3 = +prompt("Enter obtained marks for " + subject3 + ":");

// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var totalObtained = obtained1 + obtained2 + obtained3;
var totalSubjectMarks = totalMarksPerSubject * 3;
var percentage = (totalObtained / totalSubjectMarks) * 100;

var percent1 = (obtained1 / totalMarksPerSubject) * 100;
var percent2 = (obtained2 / totalMarksPerSubject) * 100;
var percent3 = (obtained3 / totalMarksPerSubject) * 100;


document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + obtained1 + "</td><td>" + percent1.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + obtained2 + "</td><td>" + percent2.toFixed(2) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + obtained3 + "</td><td>" + percent3.toFixed(2) + "%</td></tr>");
document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>" + "<br>");

// Chapters # 14-16 (ARRAYS)

// 1. Declare an empty array using JS literal notation to store
// student names in future.

var studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

var studentNames = new Array();

// 3. Declare and initialize a strings array.

var fruits = ["Apple", "Banana", "Mango"]

// 4. Declare and initialize a numbers array.

var numbers = [10, 20, 30, 40];

// 5. Declare and initialize a boolean array.

var flags = [true, false, true];

// 6. Declare and initialize a mixed array.

var mixedArray = ["Ali", 25, true, null];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("Qualifications;" + "<br>")

for (var i = 0; i < qualifications.length; i++) {
  document.write((i + 1) + ") " + qualifications[i] + "<br>");
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var students = ["Michael", "John", "Tony"];

var scores = [320, 230, 480];

var totalScore = 500;

for (var i = 0; i < students.length; i++) {
  var percentage = (scores[i] / totalScore) * 100;
  document.write("Score of " + students[i] + " is " + scores[i] + 
                 ". Percentage: " + percentage.toFixed(2) + "%<br>");
}





















