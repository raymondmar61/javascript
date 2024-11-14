/* JavaScript & jQuery by Jon Duckett Chapter 2 Basic JavaScript Instructions */
let variableKeyword = "variableNameCamelCase";
let price = 5;
let quantity = 14;
let total = price * quantity
let arrayOfColorsLiteral = ["white","black","red","blue","yellow","orange"];
let arrayOfColorsConstructor = new Array ("white","black","red","blue","yellow","orange",true,39,"values can be different data types");
let combineStrings = "Use a plus sign " + " to combine strings."
document.write(variableKeyword) //print variableNameCamelCase
document.write("<p>")
document.write(total) //print 70
document.write("<p>")
document.write("Use \\backwards slash as the escape character. \"Use straight quotes\".") //print Use \backwards slash as the escape character. "Use straight quotes".
console.log(arrayOfColorsLiteral) //print ['white', 'black', 'red', 'blue', 'yellow', 'orange'] *printed on Chrome's Console*
console.log(arrayOfColorsLiteral[1]) //print black *printed on Chrome's Console*
document.write(arrayOfColorsConstructor) //print white,black,red,blue,yellow,orange,true,39,values can be different data types
document.write("<p>")
document.write(arrayOfColorsConstructor[0]) //print white
document.write("<p>")
document.write(arrayOfColorsConstructor[3]) //print blue
document.write("<p>")
document.write("Number of items start index count 0 is " +arrayOfColorsConstructor.length) //print Number of items start index count 0 is 9
arrayOfColorsConstructor[3] = "brown";
document.write("<p>")
document.write(arrayOfColorsConstructor) //print white,black,red,brown,yellow,orange,true,39,values can be different data types
document.write("<p>")
document.write(arrayOfColorsConstructor[3]) //print brown
document.write("<p>")
document.write(combineStrings) //print Use a plus sign to combine strings.
document.write("<p>")
document.write(12+" add a number data type to a string, the number becomes a string.") //print 12 add a number data type to a string, the number becomes a string.

/* JavaScript & jQuery by Jon Duckett Chapter 3 Functions, Methods & Objects */
/* Functions are a series of statements grouped together to perform a specific task.  Methods are the same as functions used inside an object.  Methods are part of an object.  Objects create models using data made up for properties and methods.  Chapter 3 create objects from the user.  There are build-in objects to create interactive web pages.
If different parts of a script repeat the same task, you can reuse the function instead of repeating the same set of statements.  Calling a function is when you tell the function to perform the task.  Parameters are information passed to a function to perform the task.  A return value is the answer the function generated.
*/
function functionName() {
    document.write("Give the function a name and write statements inside the curly braces.  Declare a function using the funciton keyword.  Give the function a name which is an identifier and parentheses ().  The statements which are the code block are inside the curly braces.")
}
functionName(); //return Give the function a name and write statements inside the curly braces. Declare a function using the funciton keyword. Give the function a name which is an identifier and parentheses (). The statements which are the code block are inside the curly braces.
let webBrowserMessage = "A JavaScript string display on a web browser."
function javascriptToHTML() {
    let element = document.getElementById("displayfromjavascript");
    element.textContent = webBrowserMessage
};
javascriptToHTML(); //display A JavaScript string display on a web browser. on an html file with <div id ="displayfromjavascript"></div>
function receiveParameters(width, height) {
    let variableinsidefunction = width * height;
    let addnumberforarray = 11
    let returnmultiplevalues = [(width*height),variableinsidefunction,(variableinsidefunction+addnumberforarray)];
    return returnmultiplevalues;
};
receiveParameters(5,6); //return *nothing*
document.write(receiveParameters(5,6)); //print 30,30,41.  RM:  30+11=41 for the index number 2 in returnmultiplevalues array
document.write("\n");
document.write((receiveParameters(7,2))[0]); //print 14
document.write("\n");
document.write(receiveParameters(7,2)[2]); //print 25.  RM:  14+11=25 for the index number 2 in returnmultiplevalues array
let declareVariableFunction = function(width, height) {
    return width * height;
};
let firstRectangle = declareVariableFunction(3,4);
let secondRectangle = declareVariableFunction(2,9);
document.write(firstRectangle); // return 12
document.write(secondRectangle); // return 18
let immediatelyInvokedFunctionExpression = (function () {
    let stringVariable = "IIFE pronounced iify.  IIFE are functions executed when the interpreter sees it.  The variable immediatelyInvokedFunctionExpression holds the value returned from the function instead of storing the function itself to be called later.  The final parentheses () after the closing curly brace tells the interpreter to call the function immediately.  The grouping operators which are the parentheses before function keyword and after final parentheses () tells the intrepreter its an expression.  Good for running code once, an argument when a function is called, assign a value of a property to an object, event handlers, listeners, prevent conflicts between two scripts using the same variable names.";
    return stringVariable;
}()); //return *nothing*
/* Create objects.  Objects group together variables and functions to create a model.  Variables are properties which tell us the object; for example, the total number of rooms in a hotel.  Functions are methods which run tasks; for example, look up on the computer to check the number of available rooms by subtracing the number of occupied rooms from the total number of rooms in a hotel. */
let hotelObject = {nameproperty: "Quay", totalroomsproperty: 40, bookedroomsproperty: 25, gymproperty: true, roomtypesproperty: ["twin","double","suite"],checkavailabilityfunctionmethod: function() {return this.totalroomsproperty - this.bookedroomsproperty;}}; //key and value pairs.  The this keyword indicates this is using the totalroomsproperty and bookedroomsproperty properties of hotelObject object.
//Use dot notation to access properties or methods of an object.  The period is the member operator.  The property or method on the right is a member of the object on the left.  objectname.objectproperty or object method.
let hotelName = hotelObject.nameproperty;
let availableRooms = hotelObject.checkavailabilityfunctionmethod();
let totalRooms = hotelObject["totalroomsproperty"]; //square bracket syntax valid for object properties only.  Can't use for object functions which are actually methods.
document.write(hotelName); //return Quay
document.write(availableRooms); //return 15
document.write(totalRooms); //return 40
let displayHotelNameWebBrowser = document.getElementById("displayhotelname");
displayHotelNameWebBrowser.textContent = hotelName; //display Quay at <div id ="displayhotelname"></div>
let displayAvailableRoomsWebBrowser = document.getElementById("displayavailablerooms");
displayAvailableRoomsWebBrowser.textContent = totalRooms; //display 40 at <div id ="displayavailablerooms"></div>
displayMultipleVariables.textContent = ("There are "+totalRooms+" rooms occupancy inside the "+hotelName); //display There are 40 rooms occupancy inside the Quay at <div id ="displayMultipleVariables"></div>
//Create a new object using the new keyword and the object constructor with parenthesis Object().  Create a new empty object let emptyObjectVariable = {}.
let createNewHotelObject = new Object();
createNewHotelObject.NameProperty = "Quay2";
createNewHotelObject.TotalRoomsProperty = 400;
createNewHotelObject.BookedRoomsProperty = 250;
createNewHotelObject.checkavailabilityfunctionmethod = function() {return this.createNewHotelObjectTotalRoomsProperty - this.createNewHotelObjectBookedRoomsProperty;};
document.write(createNewHotelObject.NameProperty); //print Quay2
createNewHotelObject.NameProperty = "Change property or update property to Park"
document.write(createNewHotelObject.NameProperty); //print Change property or update property to Park
createNewHotelObject["NameProperty"] = "Change property or update property square notation.  Can't use for methods."
document.write(createNewHotelObject.NameProperty); //print Change property or update property square notation.  Can't use for methods.
createNewHotelObject.NameProperty = ''; //delete property value or clear value
document.write(createNewHotelObject.NameProperty); //print *nothing*
delete createNewHotelObject.NameProperty; //delete a property
document.write(createNewHotelObject.NameProperty); //print undefined
createNewHotelObject.NameProperty = "Quay2";
document.write(createNewHotelObject.NameProperty); //print Quay2
createNewHotelObject.GymProperty = true;
createNewHotelObject.CommentsProperty = "Add a new property to an object.";
document.write(createNewHotelObject["CommentsProperty"]); //print Add a new property to an object.  RM:  insert new property insert property
//Constructor notation to create several objects.  Use a function to create multiple objects.  The name of a constructor function begins with a capital letter.  Uppercase letter.  Create instances using the constructor function.  The new keyword follows by a call to the function creates a new object.  The properties are given as arguments to the function.
function CreateMultipleHotelObjectsTemplate (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {return this.rooms-this.booked;}
};
let quayHotel = new CreateMultipleHotelObjectsTemplate("Quay", 40, 25);
let parkHotel = new CreateMultipleHotelObjectsTemplate("Park", 120, 77);
document.write(quayHotel); //print [object Object]
document.write(quayHotel["name"]); //print Quay
document.write(quayHotel.rooms); //print 40
document.write(parkHotel.checkAvailability()); //print 43
document.write("The "+quayHotel.name+" hotel has "+quayHotel.rooms+" total rooms.  The "+parkHotel["name"]+" hotel has "+parkHotel["rooms"]+" total rooms.") //print The Quay hotel has 40 total rooms. The Park hotel has 120 total rooms.
parkHotel.gym = true;  //Insert new property gym to parkHotel.  There is a gym.
document.write(parkHotel.gym) //print True
//An object with a property and its value.  The room is the property.  The cost is the value.
roomCostsObject = {room1: 420, room2: 460, room3: 230, room4: 620};
document.write(roomCostsObject) //print [object Object]
//An object in an array.  The index numbers are the property names.  Can be used as room numbers.
roomCostsArray = [420, 460, 230, 620];
document.write(roomCostsArray) //print 420,460,230,620
//Combine arrays and objects.  Objects hold arrays as values of their properties.  Arrays store a series of objects in order.
roomTotalCostsObject = {room1:[420,40,10], room2:[460,20,20], room3:[230,0,0], room4:[620,150,60]};
document.write(roomTotalCostsObject) //print [object Object]
document.write(roomTotalCostsObject.room1) //print 420,40,10
document.write(roomTotalCostsObject.room3[0]) //print 230
document.write(roomTotalCostsObject.room3[2]) //print 0
roomTotalCostsArray = [{accomodation: 420, food: 40, phone: 10},{accomodation: 426, food: 20, phone: 20},{accomodation: 230, food: 0, phone: 0},{accomodation: 620, food: 150, phone: 60}];
document.write(roomTotalCostsArray) //print [object Object],[object Object],[object Object],[object Object]
document.write(roomTotalCostsArray[0]) //print [object Object]
document.write(roomTotalCostsArray[2][0]) //print undefined
document.write(roomTotalCostsArray[2][2]) //print undefined
document.write(roomTotalCostsArray[2].accomodation) //print 230
document.write(roomTotalCostsArray[2].phone) //print 0
//Built-in objects are like a toolkit for creating interactive web pages.  For example, the width of the browser, the content of the main heading, or the length of the text the user typed in a form.  Access the build-in objects' properties or methods using dot notation.  The toolkit includes three available type of built-in objects.  1 Browser Object Model which is the browser window or tab, browser history, and the device screen.  2 Document Object Model which is the current page.  It creates a new object for each element or HTML.  3 Global JavaScript Objects which is the JavaScript language to create a model of (RM:?).  For example, an object which handles dates and times.
//An object model is a group of objects representing related things from the real world.
//The Browser Object Model creates a model of the browser window or tab.  The topmost object is the windows object which represents the current browser window or tab.  The child objects are the other browser features including the document or current web page, history, location or url, navigator or browser information, and screen or the device's display information.  For example, window.print() and window.screen.width.
//The Document Object Model creates a model of the current web page.  The topmost object is the document object which represents the web page as a whole.  The child objects are the other items on the page including <html>.  The children of <html> are <head> and <body>.  The children of <body> are <div>, <p>, and the text.  For example, document.getElementById("one") and document.lastModified.
//Global JavaScript Objects don't form a single model.  They are a group of objects related to the JavaScript language.  String, number, and boolean for data types.  Date, math, and regex or regular expressions for real world concepts.  For example, *objectname*.toUpperCase() and Math.PI() are examples.
//Selected window objects and its properties Browser Object Model
document.write(window.location) //print file:///D:/JavaScript/basicsduckett.html
document.write(window.document) //print [object HTMLDocument]
document.write(window.history) //print [object History]
document.write(window.history.length) //print 1
document.write(window.screen) //print [object Screen]
document.write(window.screen.width) //print 3384
//Selected window objects and its methods Browser Object Model
window.alert("Display message on alert box") //Creates a dialog box with message the user must click OK to close
window.open("file:///D:/innovateinfinitely/index.html") //Opens a new browser window with URL specified as parameter.  Pop-up blocking software method may not work.
window.print() //Tells browser to open print dialog box
let browserObjectModelProperties = "<h2>Browser Window</h2><p>width: "+window.innerWidth+"</p><p>height: "+window.innerHeight+"</p><h2>Screen</h2><p>width: "+window.screen.width+"</p><p>height: "+window.screen.height+"</p>";
document.write(browserObjectModelProperties)
/*
Browser Window
width: 1371

height: 1288

Screen

width: 3840

height: 2160
*/
//Selected document objects and its methods Document Object Model
document.write(document.title) //print Basic JavaScript.  It's the <title> element of the web page.
document.write(document.lastModified) //print 11/14/2024 10:51:53
// document.write(document.getElementById(getelementbyid)) //print *nothing*.  Error message appears
let documentObjectModelProperties = "<p>Page title: "+document.title+"</p><p>Page address: " +document.URL+"</p>";
document.write(documentObjectModelProperties)
/*
Page title: Basic JavaScript

Page address: file:///D:/JavaScript/basicsduckett.html
*/
//Selected global objects and its methods Global JavaScript Objects
let stringUseGlobalObjects = "Home sweet home";
document.write(stringUseGlobalObjects)
document.write(stringUseGlobalObjects.length) //print 15
document.write(stringUseGlobalObjects.toUpperCase()) //print HOME SWEET HOME
document.write(stringUseGlobalObjects.charAt(0)) //print H
document.write(stringUseGlobalObjects.charAt(7)) //print e
document.write(stringUseGlobalObjects.substring(8,12)) //print et h
document.write(stringUseGlobalObjects.split(" ")) //print Home,sweet,home
document.write(stringUseGlobalObjects.replace("me","w")) //print How sweet home.  .replace() replaces the first instance by default.
let numberForNumberObjects = 56.57;
document.write(numberForNumberObjects.toFixed(1)) //print 56.6.  Rounds number to a specified decimal places.  Returns a string.
document.write(numberForNumberObjects.toPrecision(6)) //print 56.5700.  Rounds to total number of places.  Returns a string.
document.write(Math.ceil(numberForNumberObjects)) //print 57.  Use Math object.
document.write(Math.floor(numberForNumberObjects)) //print 56.  Use Math object.
let randomNumberMaxRange = 20;
let randomNumberGenerator = Math.floor((Math.random()*randomNumberMaxRange)+1);
document.write(randomNumberGenerator) //print 3.  Returns a random number between 1 and 20 inclusive
//Create a date instance of the Date object to work with dates
let createDateObject = new Date(); //The Date object is today's date and current time by default
let setDateObject1 = new Date(1996, 11, 26, 15, 45, 55); //Dec 26, 1996 at 3:45:55pm.  0 is Jan.  11 is Dec.
document.write(setDateObject1); //print Thu Dec 26 1996 15:45:55 GMT-0800 (Pacific Standard Time)
let setDateObject2 = new Date("Dec 26, 1996 15:45:55"); //Dec 26, 1996 at 3:45:55pm
let setDateObject3 = new Date(1996, 11, 26); //Dec 26, 1996
document.write(createDateObject) //print Thu Nov 14 2024 11:27:36 GMT-0800 (Pacific Standard Time)
document.write(createDateObject.getDate()) //print 14
document.write(createDateObject.getFullYear()) //print 2024
document.write(createDateObject.getMonth()) //print 10.  0 is Jan.  11 is Dec.
document.write(createDateObject.toDateString()) //print Thu Nov 14 2024
document.write("Copyright &copy; "+createDateObject.getFullYear()) //print Copyright C 2024

/* JavaScript & jQuery by Jon Duckett Chapter 4 Decisions & Loops */
/*
== is equal to
!= is not equal to
=== strict equal to.  Check the data type and the value are the same.
!== not strict equal to.  Check the data type and the value not the same.
&& logical and
|| logical or
! logical not
Brain fart:  true and true returns true; any false in and returns false.  true or true returns true; any true in or returns true.
*/
document.write("3"===3) //print false
document.write("3"==="3") //print true
document.write(3===3) //print true
document.write("3"!==3) //print true
document.write(false == 0) //print true
document.write(false === 0) //print false.  false is a boolean.  0 is a number.
document.write(false == "") //print true
document.write(false === "") //print false.  false is a boolean.  "" is a string, an empty string.
document.write(0 == "") //print true
document.write(0 === "") //print false.  0 is a number.  "" is a string, an empty string.
document.write(undefined == null) //print true
document.write(undefined === null) //print false.  Undefined is a variable not assigned to a value.  Null is an empty value.
let ifStatementNumber = 50;
if (ifStatementNumber >= 50) {
    document.write("Congratulations")
} else {
    document.write("Try again")
};
let switchStatementNumber = Math.random();
document.write(switchStatementNumber) //print 0.4536357748550084
if (switchStatementNumber <=.25) {
    document.write("Less than .25")
} else if (switchStatementNumber <=.5) {
    document.write("Between .26 and .5") //print Between .26 and .5
} else if (switchStatementNumber <=.75) {
    document.write("Between .51 and .75")
} else if (switchStatementNumber <=1) {
    document.write("Between .76 and 1")
} else {
    document.write("Error")
};
//Switch statements allow you to compare a value against possible outcomes anda default option if no matches
let switchNumber = 2;
switch (switchNumber) {
    case 1:
        document.write("switchNumber is 1")
        break;
    case 2:
        document.write("switchNumber is 2") //print switchNumber is 2
        break;
    case 3:
        document.write("switchNumber is 3")
        break;
    case 4:
        document.write("switchNumber is 4")
        break;
    default:
        document.write("The number is greater than 4.  Graduate.")
        break;
};
//JavaScript can convert data types called type coercion; for example a string "1" could be converted to the number 1 for "1" > 0 returning true.  JavaScript is weak typing because the data type for a value can change.  Use strict equals operators to check the value and data type matches.
document.write(1===1) //print true
document.write("1"===1) //print false
//Logical operators are processed left to right.  Logical operators short-circuit or stop when there is a result.  The value which stopped the process is returned.  Experienced programmers put the code most likely to return true first in or operations and false first in and operations.  Also, the options requiring the most processing power last because another value returns true for which the most processing power doesn't need to run.
let firstValue = "Artist";
let returnFirstValue = (firstValue || "I'm second which is not returned in the or logic");
document.write(returnFirstValue) //print Artist
let returnFirstNonEmptyValue = ("" || "I'm second which is returned in the or logic" || firstValue);
document.write(returnFirstNonEmptyValue) //print I'm second which is returned in the or logic
for (let initializeVariable = 0; initializeVariable < 10; initializeVariable++) {
    document.write(initializeVariable+" for loop<br>")
}
let initializeWhileLoop = 1;
while (initializeWhileLoop < 10) {
    document.write(initializeWhileLoop+"while loop<br>")
    initializeWhileLoop++;
}
let initializeDoWhileLoop = 1;
do {
    document.write(initializeDoWhileLoop+"do while<br>")
    initializeDoWhileLoop++;
} while (initializeDoWhileLoop < 10);
let tableNumber = 3;
let operation = "subtraction";
let initializeNumber = 1
if (operation === "addition") {
    while (initializeNumber < 10) {
        document.write((initializeNumber+tableNumber)+"addition<br>")
        initializeNumber++
    };
} else if (operation === "subtraction") {
    initializeNumber = initializeNumber-tableNumber
    for (let i = 0; i < 10; i++) {
        document.write((initializeNumber-i)+"subtraction<br>")
    };
} else if (operation === "multiplication") {
    do {
        document.write((initializeNumber*tableNumber)+"multiplication<br>")
        initializeNumber++;
    } while (initializeNumber<10);
} else {
    document.write("Error in the operation variable")
};
/* -2subtraction\n -3subtraction\n -4subtraction\n -5subtraction\n -6subtraction\n -7subtraction\n -8subtraction\n -9subtraction\n -10subtraction\n -11subtraction */