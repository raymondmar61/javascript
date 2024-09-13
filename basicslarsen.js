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

