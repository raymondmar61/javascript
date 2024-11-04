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