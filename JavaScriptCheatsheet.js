// To display alert, use the alert(); function. You can do it in console or a .js file

alert("hello!");


 // Example of JS functionality - adding numbers //

function addNums() {
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;
  document.getElementById("result").innerHTML = (parseInt(num1) + parseInt(num2));
}

 // Example of JS functionality - changing text on click //
function change(){
document.getElementById("el").innerHTML = "NEW TEXT";

}

// As you continue to write JS code, make sure to check code is returning what you actually want it to return.

// DEBUGGING:
// Console = built-in tool in browser (CMD + OPTION + J)
// Alerts = you'll see output in popup as soon as alert is called
// Logging to HTML = change content of an HTML element with content of your choice
// Output to console inside a .js file using console.log("My Content")

// BASIC DATA TYPES:
// String: Hello World
// Number: -5, 5.5, 1000 (all #s in JS are floats)
// Boolean: True, False
// Undefined (no value)

// VARIABLES:
// In JavaScript and in almost any programming language, a  variable is simply a container for a value
// Examples of Variables:
// var name = "Zach";
// var numberOfWidgets = 10;
// var isCodingCool = true;

// ARRAYS:
// Holds a collection of data of any data type
// [11, 15, 25, 48, 79, "elephant"];
// Can be stored in Variables
// var class_names = ["Julie", "Sophie", "Rob", "John"];
// In this array, "charlie brown" has index of 0 and "snoopy" has
// index of 1: ["charlie brown", "snoopy"];
// Arrays can store other arrays; multi-dimensional arrays
// var toyotas = ["Camry", "Prius"]
// var porsches = ["Camero", "Boxer"];
// var cars = [toyotas, porsches];

// OBJECTS: 
// Like arrays, except you define the keys
// var car = {make: 'Toyota', model: 'Prius'}
// console.log(car['make'])
// "Toyota"

// OBJECTS: dot notation
// You can also use "dot notation" to get data out of an object
// var user = {firstName: 'Lucille', lastName: 'Bluth'};
// console.log(user.firstName);
// "Lucille"

// SEMICOLONS
// Used to end statements in JS
// code will still execute w/out them, but include

// TESTING, IF EQUAL:
// To test if 2 strings are equal
// "stringone" === "string two";
// >false
// Using three equals signs instead of two checks the object type
// If type isn't checked, then both strings are true; cause bugs

// TESTING, IF NOT EQUAL:
// "stringone" !== "string two";
// >true

// TESTING, if one # greater than other:
// 5 > 10;
// > false

//FUNCTION:
// function someName(numberOne, otherNumber){
// 		return numberOne + 10 + otherNumber;
//  	numberOne = 4, otherNumber = 14
// console.log(someName(4, 14));
// Calling a function is also known as "invoking" it
// >28

