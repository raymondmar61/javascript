/* Get Programming With JavaScript By John Larsen Chapter 2 Variables: Storing Data In Your Program */
var varkeyworddeclarevariable; //RM:  var keyword used in older JavaScript.  let keyword is preferred.
varkeyworddeclarevariable = "Assign a string value to variable varkeyworddeclarevariable.";
console.log(varkeyworddeclarevariable) //print Assign a string value to variable varkeyworddeclarevariable.
var declarevariableassignvalue = "Declare variable and assign a value in one line.";
console.log(declarevariableassignvalue) //print Declare variable and assign a value in one line.
console.log("Use addition symbol to join text strong concatenation " +varkeyworddeclarevariable+ " " +declarevariableassignvalue) //print Use addition symbol to join text strong concatenation Assign a string value to variable varkeyworddeclarevariable. Declare variable and assign a value in one line.
var addscore;
addscore = 100+50;
console.log(addscore); //print 150
var expressionnumber1;
expressionnumber1 = 111;
var expressionnumber2 = 222;
var expressionnumber3 = 499;
totalexpression = expressionnumber1 + (expressionnumber2*expressionnumber3);
console.log(totalexpression); //print 110889

/* Get Programming With JavaScript By John Larsen Chapter 3 Objects:  Grouping Your Data */
var emptyobject;
emptyobject = {}; //A property is declared inside curly braces.  {keyproperty:valueproperties} like Python dictionary key and value.
var bookobject;
bookobject = {title:"The Hobbit",author:"J.R.R. Tolkien",published:1937};
console.log(bookobject); //print {title: 'The Hobbit', author: 'J.R.R. Tolkien', published: 1937}
var bookobject2;
bookobject2 = {title:"Northern Lights",author:"Philip Pullman",published:2222};
console.log(bookobject2.title) //print Northern Lights
console.log(bookobject2.author) //print Philip Pullman
bookobject2.published = 1995;
console.log(bookobject2.published) //print 1995
var backslashescapecharacter = "Use backslash character as the escape character.  Don\'t forget the portfolio.  She looked at me.  \"What did you say?\" she asked.";
console.log(backslashescapecharacter)  //print Use backslash character as the escape character.  Don't forget the portfolio.  She looked at me.  "What did you say?" she asked.
var locationobjectsimilartojson = {"city":"San Francisco","state":"CA","country":"USA","zip":"94101","latitude":37.775,"longitude":-122.418,"elevation":47.000}; //JSON JavaScript Object Notation
console.log(locationobjectsimilartojson.city) //print San Francisco
console.log(locationobjectsimilartojson.elevation) //print 47

/* Get Programming With JavaScript By John Larsen Chapter 4 Functions:  Code On Demand */
function functionkeyword() {
    console.log("Function keyword, function name, parenthesis, and the code block between curly braces.")
}
functionkeyword(); //print Function keyword, function name, parenthesis, and the code block between curly braces.
var assignfunctiontovariable;
assignfunctiontovariable = function () {
    console.log("A function assigned to a variable.  No need for function name.")
}
assignfunctiontovariable(); //print A function assigned to a variable.  No need for function name.
var number1 = 1000;
var number2 = 66;
var result;
var findtotal;
findtotal = function () {result=number1+number2};
console.log(number1+ " + "+number2+" = "+result) //print 1000 + 66 = undefined
findtotal();
console.log(number1+ " + "+number2+" = "+result) //print 1000 + 66 = 1066
var movie1;
var movie2;
var movie3;
var moviefunctionvariable;
var showmovieinfo;
movie1 = {"title":"Inside Out","actors":"Amy Poehler, Bill Hader","directors":"Pete Doctor, Ronaldo Del Carmen"};
movie2 = {"title":"Spectre","actors":"Daniel Craig, Christoph Waltz","directors":"Sam Mendes"};
movie3 = {"title":"Star Wars:  Episode VII-The Force Awakens","actors":"Harrison Ford, Mark Hamill, Carrie Fisher","directors":"J.J. Abrams"};
showmovieinfo = function () {
    console.log("Movie information for "+moviefunctionvariable.title) //The moviefunctionvariable is used in the showmovieinfo function
    console.log("Actors: "+moviefunctionvariable.actors)
    console.log("Directors: "+moviefunctionvariable.directors)
}
moviefunctionvariable = movie1;
console.log(moviefunctionvariable) //print {title: 'Inside Out', actors: 'Amy Poehler, Bill Hader', directors: 'Pete Doctor, Ronaldo Del Carmen'}
showmovieinfo();
/*
Movie information for Inside Out
yy.js:48 Actors: Amy Poehler, Bill Hader
yy.js:49 Directors: Pete Doctor, Ronaldo Del Carmen
*/

moviefunctionvariable = movie2;
showmovieinfo();
/*
Movie information for Inside Out
yy.js:48 Actors: Amy Poehler, Bill Hader
yy.js:49 Directors: Pete Doctor, Ronaldo Del Carmen
*/

moviefunctionvariable = movie3;
showmovieinfo();
/*
Movie information for Star Wars:  Episode VII-The Force Awakens
yy.js:48 Actors: Harrison Ford, Mark Hamill, Carrie Fisher
yy.js:49 Directors: J.J. Abrams
*/
var sale1;
var sale2;
var sale3;
var salefunctionsvariable;
var calculatetaxfunction;
var displaysalefunction;
sale1 = {price:140, taxrate:15};
sale2 = {price:40, taxrate:10};
sale3 = {price:120, taxrate:20};
calculatetaxfunction = function () {
    salefunctionsvariable.tax = salefunctionsvariable.price * (salefunctionsvariable.taxrate/100)
    salefunctionsvariable.total = salefunctionsvariable.price + salefunctionsvariable.tax};
displaysalefunction = function () {
    console.log("price = $"+salefunctionsvariable.price)
    console.log("tax @ "+salefunctionsvariable.taxrate + "% = $" + salefunctionsvariable.tax)
    console.log("total cost = $"+salefunctionsvariable.total)
}
salefunctionsvariable = sale1;
console.log(salefunctionsvariable) //print {price: 140, taxrate: 15}
calculatetaxfunction();
calculatetaxfunction(console.log(salefunctionsvariable.tax)); //print 21
calculatetaxfunction(console.log(salefunctionsvariable.total)); //print 161
displaysalefunction();
/*
yy.js:88 price = $140
yy.js:89 tax @ 15% = $21
yy.js:90 total cost = $161
*/
salefunctionsvariable = sale2;
console.log(salefunctionsvariable) //print {price: 40, taxrate: 10}
calculatetaxfunction();
displaysalefunction();
/*
yy.js:88 price = $40
yy.js:89 tax @ 10% = $4
yy.js:90 total cost = $44
*/
salefunctionsvariable = sale3;
calculatetaxfunction();
displaysalefunction();
/*
yy.js:88 price = $120
yy.js:89 tax @ 20% = $24
yy.js:90 total cost = $144
*/

/* Get Programming With JavaScript By John Larsen Chapter 05 Arguments:  Passing Data To Functions */
let variableoutsidefunction;
let showmessagefunction;
variableoutsidefunction = "String displayed to variableoutsidefunction";
showmessagefunction = function() {
    console.log(variableoutsidefunction);
};
showmessagefunction(); //return String displayed to variableoutsidefunction
showmessagevariablefunction = function (parameterreceivestring) {console.log(parameterreceivestring);};
showmessagevariablefunction("Assign the string argument to parameterreceivestring"); //return Assign the string argument to parameterreceivestring
showmessagevariablefunction("Call showmessagevariablefunction again with another string argument"); //return Call showmessagevariablefunction again with another string argument
let squarefunction;
squarefunction = function (numbertosquare) {
    let result;
    result = numbertosquare * numbertosquare;
    console.log(numbertosquare + "*" + numbertosquare + "=" + result);
};
squarefunction(10); //return 10*10=100
squarefunction(-2); //return -2*-2=4
squarefunction(0.5); //return 0.5*0.5=0.25
let threeparameterssum;
threeparameterssum = function (number1, number2, number3) {
    let total = number1 + number2 + number3;
    console.log("The sum of the three numbers is "+ total);
};
threeparameterssum(30, 23, 55); //return The sum of the three numbers is 108
threeparameterssum(2.8, -5, 10); //return The sum of the three numbers is 7.8
let objectvariable1;
let objectvariable2;
let receiveobjectfunction;
let namehealth;
receiveobjectfunction = function (displayvalue) {
    console.log(displayvalue);
}
namehealth = function(playername, health) {
    console.log(playername+" has health "+health);
}
objectvariable1 = {name:"Kandra",place:"The Dungeon Of Doom",health:50};
objectvariable2 = {name:"Dax",place:"The Old Library",health:40};
receiveobjectfunction(objectvariable1.name); //return Kandra
receiveobjectfunction(objectvariable1.health); //return 50
receiveobjectfunction(objectvariable2.place); //return The Old Library
namehealth(objectvariable1.name, objectvariable1.health); //return Kandra has health 50

/* Get Programming With JavaScript By John Larsen Chapter 06 Return Values:  Getting Data From Functions */
let returnstringmessagefunction;
let callfunctionvariable;
returnstringmessagefunction = function () {
    return "Example using return keyword string value replaces function call"
}
callfunctionvariable = returnstringmessagefunction();
console.log(callfunctionvariable) //print Example using return keyword string value replaces function call
console.log(returnstringmessagefunction()) //print Example using return keyword string value replaces function call
returnstringmessagefunction(); //return *nothing*
let returnargumentfunction;
returnargumentfunction = function(color) {
    return "String statement with a parameter color " + color
}
console.log(returnargumentfunction("white")) //print String statement with a parameter color white
console.log(returnargumentfunction("blue")) //print String statement with a parameter color blue
returnargumentfunction("pink"); //return *nothing*
let addtwonumbersfunction;
addtwonumbersfunction = function (number4, number5) {
    let internalvariable = number4 + number5;
    return internalvariable;
}
console.log(addtwonumbersfunction(50, 23)) //print 73
console.log("Insert a string "+addtwonumbersfunction(500, 2395)) //print Insert a string 2895
let returntruefalsefunction;
returntruefalsefunction = function (okay) {
    return true;
}
console.log(returntruefalsefunction("yes")); //print true

/* Get Programming With JavaScript By John Larsen Chapter 07 Object Arguments:  Functions Working With Objects */
let planetjupiterobject;
let objectparameterfunction;
planetjupiterobject = {name:"Jupiter",position:5,type:"Gas Giant",radius:69911,sizerank:1};
objectparameterfunction = function (receiveobjectparameter) {
    return receiveobjectparameter.name + ": planet number " + receiveobjectparameter.position;
}
console.log(objectparameterfunction(planetjupiterobject)) //print Jupiter: planet number 5
let calculateplanetsize = function (receiveobjectparameter) {
    let r = receiveobjectparameter.radius;
    receiveobjectparameter.area = 4*3.142*r*r;
    receiveobjectparameter.volume = 4*3.142*r*r*r/3;
}
let displayplanetsize = function (receiveobjectparameter) {
    console.log(receiveobjectparameter.name);
    console.log("surface area = "+receiveobjectparameter.area+ " square km");
    console.log("volume = "+receiveobjectparameter.volume+ " cubic km");
}
calculateplanetsize(planetjupiterobject) //RM:  run calculateplanetsize to calculate the surface and volume to display
displayplanetsize(planetjupiterobject)
/*
Jupiter
yy.js:91 surface area = 61426702271.128 square km
yy.js:92 volume = 1431467394158943.2 cubic km
*/
let createplanetobjectfunction;
let planetinformation;
let planet1;
let planet2;
createplanetobjectfunction = function (namep, positionp, typep, radiusp, rankp) { //p stands for parameter
    return {name: namep, position: positionp, type: typep, radius: radiusp, sizerank: rankp};
};
planetinformation = function (planet) {
    return planet.name + ": planet " + planet.position
};
planet1 = createplanetobjectfunction("Jupiter",5,"Gas Giant",69911,1);
planet2 = createplanetobjectfunction("Neptune",8,"Ice Giant",24622,4);
console.log(planet1) //print {name: 'Jupiter', position: 5, type: 'Gas Giant', radius: 69911, sizerank: 1}
console.log(planet2) //print {name: 'Neptune', position: 8, type: 'Ice Giant', radius: 24622, sizerank: 4}
console.log(planetinformation(planet1)) //print Jupiter: planet 5
console.log(planetinformation(planet2)) //print Neptune: planet 8
/* Use function as a method */
let spacer = {};
spacer.blankspace = function () {return "";}; //Use dot notation to refer to blankspace property of the spacer object.  Function returns an empty string.
spacer.newline = function () {return "\n";};
console.log(spacer.blankspace())
console.log("Top line"+spacer.newline()+"Bottom line")
console.log(spacer.blankspace())
/*
"" yy.js:121 
Top line yy.js:122 
Bottom line
"" yy.jst123
*/
let spacer2;
spacer2 = {
    blankspace: function () {
        return "";
    },
    newline: function () {
        return "\n";
    }
};
console.log(spacer2.blankspace())
console.log("Top line2"+spacer2.newline()+"Bottom line2")
console.log(spacer2.blankspace())
/*
"" yy.js:139 
Top line2 yy.js:140
Bottom2 line
"" yy.jst141
*/
let mathbuiltinmethods = function (smallernumber, largernumber) {
    console.log("Minimum number "+Math.min(smallernumber, largernumber)+".  Maximum number "+Math.max(smallernumber, largernumber))
};
mathbuiltinmethods(12, 3) //return Minimum number 3.  Maximum number 12
console.log(("convert lower case to upper case").toUpperCase()) //print CONVERT LOWER CASE TO UPPER CASE
console.log(("Extract string start count at zero start 3 get 14 characters").substr(3,14)) //print ract string st
console.log(("Start count at zero find letter m The cow jumped over the Moon!").indexOf("M")) //print 58
console.log(("Start count at zero find letter The cow jumped over the Moon! there is no no_").indexOf("not")) //print -1