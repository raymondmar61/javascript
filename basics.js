/* JavaScript The Definitive Guide By David Flanagan Chapter 03 Types, Values, And Variables */
const declareconstants = "Constant string value can't change";
let declarevariables;
let declare, multiplevariables, inasingle, line;
var declarevariablesolderjavascript;
a = "variable a is me";
console.log(a) //print variable a is me
let leta = "variable a with let is me";
console.log(leta) //print variable a is me

//Floating-point literals may also be represented using exponential notation: a real number followed by the letter e (or E), followed by an optional plus or minus sign, followed by an integer exponent. This notation represents the real number multiplied by 10 to the power of the exponent.
let exponentnotationtimestentothe23 = 6.02e23;
console.log(exponentnotationtimestentothe23) //print 6.02e+23
let exponentnotationtimestentothenegative32 = 1.4738223E-23;
console.log(exponentnotationtimestentothenegative32) //print 1.4738223e-23

//Common math objects
console.log(Math.pow(2,5)) //print 32
console.log(Math.round(.4)) //print 0
console.log(Math.round(.6)) //print 1
console.log(Math.ceil(.6)) //print 1
console.log(Math.floor(.6)) //print 0
console.log(Math.abs(-5)) //print 5
console.log(Math.max(100,200,300)) //print 300
console.log(Math.min(100,200,300)) //print 100
console.log(Math.random()) //print 0.026246311714594572.  Random number between 0 inclusive and 1 exclusive.
console.log(Math.PI) //print 3.141592653589793
console.log(Math.E) //print 2.718281828459045.  Natural logarithm.
console.log(Math.sqrt(49)) //print 7
console.log(Math.sin(0)) //print 0
console.log(Math.log(10)) //print 2.302585092994046
console.log(Math.trunc(3.9)) //print 3
console.log(Math.cbrt(27)) //print 3.  Cube root
console.log(1/0) //print Infinity
console.log(0/0) //print NaN.  Not a number.

//Common number properties
console.log(Number.isNaN(55)) //print false.  Is 55 not a number?
console.log(Number.isInteger(55)) //print true.  Is 55 an integer?
console.log(55 === NaN) //print false
console.log(55 != Number.isNaN(55)) //print true
console.log(55 === Number.isNaN(55)) //print false

let onelongnumber = 123456.789
console.log(onelongnumber.toFixed(0)) //print 123457
console.log(onelongnumber.toFixed(2)) //print 123456.79
console.log(onelongnumber.toFixed(5)) //print 123456.78900
console.log(onelongnumber.toExponential(1)) //print 1.2e+5
console.log(onelongnumber.toExponential(3)) //print 1.235e+5
console.log(onelongnumber.toPrecision(4)) //print 1.235e+5.  toPrecision() converts a number to a string with the number of significant digits specified in exponential notation if the number is not large enough to display the entire integer portion
console.log(onelongnumber.toPrecision(7)) //print 123456.8
console.log(onelongnumber.toPrecision(10)) //print 123456.7890
console.log(typeof(onelongnumber.toPrecision(10))) //print string

//parseInt() and parseFloat() functions.  parseInt() parses integers.  parseFloat() parses both integers and floats.  Leading whitespaces are skipped.  The parses parses as many numeric characters as they can.
console.log(parseInt("3 blind mice")) //print 3
console.log(parseFloat("3 blind mice")) //print 3
console.log(parseFloat("  3.14 meters")) //print 3.14
console.log(parseInt("-12.34")) //print -12
console.log(parseInt("0xFF")) //print 255
console.log(parseFloat(".1")) //print 0.1
console.log(parseInt("0.1")) //print 0
console.log(parseInt(".1")) //print NaN.  Integers can't being with a decimal.
console.log(parseFloat("$72.47")) //print NaN.  Numbers can't begin with $.

//Common dates and times
console.log(Date.now()) //print 1721760980547.  Current time as a timestamp
console.log(Date()) //print Tue Jul 23 2024 11:57:12 GMT-0700 (Pacific Daylight Time).  Get current date and time.

//Strings and text
console.log("firstline\nsecondline")
/*
firstline
secondline
*/
console.log("here\
is\
one\
 line\
  printed") //print hereisone line  printed
console.log(`the newline character at the end of this line
 is included literally.  Added escape character shouldn\'t.  Okay`)
/*
the newline character at the end of this line
 is included literally.  Added escape character shouldn't.  Okay
*/

//Common string properties.  Index number starts at zero.
let samplestring = "Hello, world";
console.log(samplestring[0]) //print H
console.log(samplestring[samplestring.length-1]) //print d
console.log(samplestring.substring(1,4)) //print ell
console.log(samplestring.slice(1,4)) //print ell
console.log(samplestring.slice(-3)) //print rld
console.log(samplestring.split(", ")) //print ['Hello', 'world']
console.log(samplestring.indexOf("l")) //print 2
console.log(samplestring.indexOf("l",4)) //print 10.  Start search at index number 4.
console.log(samplestring.indexOf("zz")) //print -1
console.log(samplestring.lastIndexOf("o")) //print 8.  Last letter o.
console.log(samplestring.startsWith("Hell")) //print true
console.log(samplestring.endsWith("rld")) //print true
console.log(samplestring.includes("orl")) //print true
console.log(samplestring.replace("llo,","ya.")) //print Heya. world
console.log(samplestring.toLowerCase()) //print hello, world
console.log(samplestring.toUpperCase()) //print HELLO, WORLD
console.log(samplestring.charAt(1)) //print e.  Character at index number 1 or second character.
console.log(samplestring.charAt(samplestring.length-1)) //print d.  Last character.
/* The padding functions add spaces to a length of the number */
console.log("th".padStart(3)) //print  th
console.log("threespacesleftpaddingnone".padStart(3)) //print threespacesleftpaddingnone
console.log("x".padStart(3)) //print   x
console.log("threespacesleftpaddingnone".padStart(27)) //print  threespacesleftpaddingnone.  26 characters.  27 characters with one space before threespacesleftpaddingnone.
console.log("x".padEnd(3)) //print x  .  Add two spaces to the right of x
console.log("x".padStart(3,"*")) //print **x
console.log("x".padEnd(3,"-")) //print x--
console.log("   remove spaces at the start and the end ".trim()) //print remove spaces at the start and the end
console.log("   remove spaces at the start and the end ".trimStart()) //print remove spaces at the start
console.log("   remove spaces at the start and the end ".trimEnd()) //print    remove spaces at the end
console.log(samplestring.concat(".  Combine text at the end.  Use plus + another option.")) //print Hello, world.  Combine text at the end.  Use plus + another option.
console.log("repeat text five times.  ".repeat(5)) //print repeat text five times.  repeat text five times.  repeat text five times.  repeat text five times.  repeat text five times.

//String methods
let onenumber = 157
console.log(onenumber.toString()) //print 157

//Variable type
let stringname = "Check string variable type"
console.log(typeof stringname) //print string
let integernumber = 589
console.log(typeof integernumber) //print number

/* Common escape characters:  \0 The NUL character (\u0000), \b Backspace (\u0008), \t Horizontal tab (\u0009), \n Newline (\u000A), \v Vertical tab (\u000B) */

//Symbols.  Symbols are non-string property names.  No literal syntax.  Use the Symbol() function to create a Symbol value.  Symbol() funciton doesn't return the same value twice.  You can use the value as a property name to add a new property to an object without worrying you may overwrite an existing property with the same name.  Symbols serve as a language extension mechanism.
let symbolname = Symbol("propertyname")
console.log(symbolname) //print Symbol(propertyname)
console.log(typeof symbolname) //print symbol
let createnewobject = {};
createnewobject[symbolname] = 2;
console.log(createnewobject) //print {Symbol(propertyname): 2}
console.log(createnewobject[symbolname]) //print 2
console.log(createnewobject[symbolname]) //print 2

//Destructuring assignment
// let [leftvariablex, rightvariabley] = [1,2];
// console.log(leftvariablex) //print 1
// console.log(rightvariabley) //print 2
// [leftvariablex, rightvariabley] = [leftvariablex+111, rightvariabley+222]; //return TypeError: Cannot set properties of undefined (setting '2')
let [leftvariablex, rightvariabley] = [1,2];
[leftvariablex, rightvariabley] = [leftvariablex+111, rightvariabley+222];
[leftvariablex,rightvariabley] = [rightvariabley,leftvariablex];
console.log(leftvariablex) //print 224
console.log(rightvariabley) //print 112

/* JavaScript The Definitive Guide By David Flanagan Chapter 04 Expressions And Operators */
let anemptyarray = [];
let twoelementarray = [1+2,3+4];
let nestedarrays = [[1,2,3],[4,5,6],[7,8,9]];
console.log(nestedarrays)
/*
0 : Array(3)
0: 1
1: 2
2: 3
length: 3
    [[Prototype]] : Array(0)
1 : (3) [4, 5, 6]
2 : (3) [7, 8, 9]
length : 3
*/
let fiveelementsthreeundefined = [1,,,5];
let objectexpression = {x:2.3, y:-1.2};
let emptyobjectexpression = {}
console.log(emptyobjectexpression) //print {}
emptyobjectexpression.x=2.3, emptyobjectexpression.y=-1.2;
console.log(emptyobjectexpression)
/*
{x: 2.3, y: -1.2}
x : 2.3
y : -1.2
*/
let objectexample = {x:1, y: {z:3}};
let arrayexample = [objectexample, 4, [5,6]];
console.log(objectexample.x) //print 1
console.log(objectexample.y.z) //print 3
console.log(objectexample["x"]) //print 1
console.log(arrayexample[1]) //print 4
console.log(arrayexample[2][1]) //print 6
console.log(arrayexample[0].x) //print 1
/*
Selected Operators
++ increment
-- decrement
** exponents
+ concatenate strings
instanceof tests object class
in tests whether property exists
== non-strict equality or is equal to
!= non-strict inequality
=== strict equality or is strictly equal to.  Author says use === instead of ==.
!== strict inequality.  Author says use !== instead of !=.
&& logical and
|| logical or
*/
console.log("combine "+ "these " + "strings "+ "with "+ "plus "+ "sign +") //print combine these strings with plus sign +
console.log("1"+2) //print 12.  number converts to string.
console.log(typeof("1"+2)) //print string
console.log(1+2+" blind mice") //print 3 blind mice
console.log(true+true) //print 2.  True is numerical value 1.
console.log(2+null) //print 2.  Null converts to numerical value 0.
let dobject = new Date();
console.log(dobject instanceof Date) //print true.  dobject created with Date().
console.log(dobject instanceof Object) //print true.  dobject is an object for which all objects are an instace of Object.
console.log(dobject instanceof Number) //print false.  dobject is not a Number object.
let aarray = [1,2,3];
console.log(aarray instanceof Array) //print true. aarray is an array.
console.log(aarray instanceof Object) //print true. aarray is an array for which all arrays are objects.
console.log(aarray instanceof RegExp) //print false. aarray is an array not a regular expression.
/* Global function eval() interprets strings to produce a value. It can be a security problem.  Don't pass string from user input. */
console.log(eval("3+2")) //print 5
console.log(eval("xlocalvariable=1")) //print 1
console.log(xlocalvariable) //print 1
console.log(eval("var ylocalvariable=3;")) //print undefined
console.log(ylocalvariable) //print 3
/* delete removes an object property or array element. */
let oobject = {x:1, y:2};
console.log(oobject) //print {x: 1, y: 2}
delete oobject.x
console.log(oobject) //print {y: 2}
let aarray2 = [1,2,3];
console.log(aarray2) //print [1, 2, 3]
delete aarray2[2];
console.log(3 in aarray2) //print false

/* JavaScript The Definitive Guide By David Flanagan Chapter 05 Statements */
/*Conditionals.  If statements.  A single statement after the if is required.
if (expression)
    statement1    
else
    statement2

if (expression) statement

if (expression1) {
    statement1 {
    if (expressionnestedif2)
        statementnestedif2
    }
    } else {
        statement3
    }

if (expression1) {
    statement1
} else if (expression2) {
    statement2
} else if (expression3) {
    statement3
} else {
    statement4
}
*/
let username = "full";
if (username == null)
    username = "John Doe";
//or
if (!username) username = "John Doe";

let n = 58;
if (n===1)
    variable1 = "n is one";
else
    variable1 = "n is not one";

let elseifvariable = "111";
if (elseifvariable === "000") {
    console.log("Number 000");
} else if (elseifvariable === "111") {
    console.log("Number 111"); //print Number 111
} else if (elseifvariable === "222") {
    console.log("Number 222");
} else {
    console.log ("Number unknown");
}

/*Switch.

switch(expression) {
    statements
}
*/
let nn = 59;
switch(nn) {
    case 49:
        console.log("nn is 49")
        break;
    case 55:
        console.log("nn is 55")
        break;
    case 59:
        console.log("nn is 59") //print nn is 59
        break;
    case 1793:
        console.log("nn is 1793")
        break;
    default:
        console.log("Without break; statement, switch prints nn is 59 nn is 1693 and the default statement")
        break;
}
/*While
while (expression)
    statement

Do while
do
    statement
while (expression);

*/
let count = 0
while(count < 10) {
    console.log(count); //print from 0 to 9 in its own line
    count++;
}
let numbervariable = 0
do {
    console.log(numbervariable); //print from 0 to 10 in its own line
} while (numbervariable++ < 10);

/*For
for(all the initialize ; all the test ; all the increment)
    statement

for of
for (let variable1 of variable2) {
    console.log("for/of loop works with iterable objects such as arrays, strings, sets, and maps.")
}

for in
for (variable in object)
    console.log("for/in is like for/of loop.  for/of loop requires an interable object.  for/in works with any object.")
Author says when working with arrays, you almost always want to use for/of instead of for/in.  The for/in loop does not actually enumerate all properties of an object.
*/
for(let count2 = 0; count2 < 10; count2++) {
    console.log(count2) //print from 0 to 9 in its own line.  RM:  semicolons in the for statement.
}
let ivariable, jvariable, sumvariable = 0;
for (ivariable=0,jvariable=10; ivariable< 10; ivariable++, jvariable--) {
    sumvariable += ivariable * jvariable
    console.log("Example multiple initialize, test, and increment "+sumvariable)
    /*
    Example multiple initialize, test, and increment 0
    Example multiple initialize, test, and increment 9
    Example multiple initialize, test, and increment 25
    Example multiple initialize, test, and increment 46
    Example multiple initialize, test, and increment 70
    Example multiple initialize, test, and increment 95
    Example multiple initialize, test, and increment 119
    Example multiple initialize, test, and increment 140
    Example multiple initialize, test, and increment 156
    Example multiple initialize, test, and increment 165
    */
}
for (let onelongword of "thequickbrown") {
    console.log(onelongword) //print thequickbrown each letter in its own line
}
let pythondictionary = {x:"one", y:"two", z:"three"};
let eachk = "";
for (let eachk of Object.keys(pythondictionary)) {
    console.log(eachk) //print xyz in its own line
}
let eachv = "";
for (let eachv of Object.values(pythondictionary)) {
    console.log(eachv) //print one two three in its own line
}
for (let [eachkey, eachvalue] of Object.entries(pythondictionary)) {
    console.log(eachkey, eachvalue) //print x one\n y two\n z three\n
}
let countletters = {};
for (let eachletter of "mississippi") {
    if (countletters[eachletter]) {
        countletters[eachletter]++;
    } else {
        countletters[eachletter] = 1;
    }
}
console.log(countletters) //print {m: 1, i: 4, s: 4, p: 2}
for (let eachletter of "oneleterword") {
    console.log(eachletter) //print oneleterword in its own line.  RM:  the tt returns a number 2 which is printed 2t if oneletterword
}
for (let eachletter in "oneleterword") {
    console.log(eachletter) //print from 0 to 11 in its own line
}
wordsvariable = "a simple idea"
for (let eachletter of wordsvariable) {
    console.log(eachletter) //print a simple idea in its own line with the spaces
}
for (let eachwordsvariable in wordsvariable){
    console.log(eachwordsvariable) //print from 0 to 11 in its own line
}

let falseinteger = "seveneightyfour";
try {
    console.log(sum(55+falseinteger))
}
catch {
    console.log("The variable is not a number")  //print The variable is not a number
}
finally {
    console.log("The end of the day mistakes are learned.  finally is printed no matter what.")  //print The end of the day mistakes are learned.  finally is printed no matter what.
}

/* JavaScript The Definitive Guide By David Flanagan Chapter 06 Objects */
/*
An object literal is a comma-separated list of colonseparated name:value pairs, enclosed within curly braces.
A property name is a Java‐Script identifier or a string literal (the empty string is allowed).
A property value is any JavaScript expression; the value of the expression (it may be a primitive value or an object value) becomes the value of the property.
*/
let objectwithnoproperties = {};
let twonumericproperties = {x:0, y:1};
console.log("y" in twonumericproperties) //print true.  The property variable must be in quotes.
console.log(1 in twonumericproperties) //print false
console.log("toString" in twonumericproperties) //print true.  twonumericproperties inherits a toString property.  RM:  Numericals are converted to strings in properties?!?
console.log(twonumericproperties.hasOwnProperty("x")) //print true.  twonumericproperties has own property x.
console.log(twonumericproperties.propertyIsEnumerable("x")) //print true.  twonumericproperties has own enumerable property x.
console.log(twonumericproperties.x !== undefined) //print true.  twonumericproperties has property x.
let bookpropertynames = {"main title":"JavaScript","sub title":"The Definitive Guide","audience":"programmers","starrating":2.0, author:{firstname:"David", lastname:"Flanagan"}};
let secondjavascriptobject = Date.prototype;
console.log(secondjavascriptobject) //print {toString: ƒ, toDateString: ƒ, toTimeString: ƒ, toISOString: ƒ, toUTCString: ƒ, …} . . .  RM:  lists all object from the Date object or Date module
let createnewobject1 = Object.create({x:1, y:2});
console.log(createnewobject1.x+createnewobject1.y) //print 3
let createnullobject = Object.create(null);
//let nomodification = {inheritedobject:"don't change the value"};
//library.function(Object.create(nomodification)); //Can't modify can't change
let getauthorproperty = bookpropertynames.author;
let getnameproperty = bookpropertynames.author.lastname;
let gettitleproperty = bookpropertynames["main title"];
console.log(getauthorproperty) //print {firstname: 'David', lastname: 'Flanagan'}
console.log(getnameproperty) //print Flanagan
console.log(gettitleproperty) //print JavaScript
let combinetwoproperties = {...twonumericproperties, ...bookpropertynames};
console.log(combinetwoproperties) //print {x: 0, y: 1, main title: 'JavaScript', sub title: 'The Definitive Guide', audience: 'programmers', …}
console.log(combinetwoproperties.x, combinetwoproperties["sub title"]) //print 0 'The Definitive Guide'
let spreadpriority1 = {x:1};
let spreadpriority2 = {x:0, ...spreadpriority1};
console.log(spreadpriority2) //print {x: 1}
let spreadpriority3 = {...spreadpriority1, x:0};
console.log(spreadpriority3) //print {x: 0}
console.log(bookpropertynames) //print {main title: 'JavaScript', sub title: 'The Definitive Guide', audience: 'programmers', starrating: 2, author: {…}, …}
delete bookpropertynames.starrating
bookpropertynames.addpropertyedition = 7;
console.log(bookpropertynames) //print {main title: 'JavaScript', sub title: 'The Definitive Guide', audience: 'programmers', author: {…}, addpropertyedition: 7}
//The delete operator only deletes own properties, not inherited ones. (To delete an inherited property, you must delete it from the prototype object in which it is defined. Doing this affects every object that inherits from that prototype.)
let gotopropertyx = 10, gotopropertyy = 20;
hereisproperty = {gotopropertyx, gotopropertyy};
console.log(hereisproperty) //print gotopropertyx: 1, gotopropertyy: 2}
console.log(hereisproperty.gotopropertyx+hereisproperty.gotopropertyy) //print 30
let ihavepropertyxyz = {xyz: "ihavepropertyxyz has own property xyz and inherits property toString"};
console.log(ihavepropertyxyz) //print {xyz: 'ihavepropertyxyz has own property xyz and inherits property toString'}
delete xyz
console.log(ihavepropertyxyz) //print {xyz: 'ihavepropertyxyz has own property xyz and inherits property toString'}
delete ihavepropertyxyz.xyz
console.log(ihavepropertyxyz) //print {}
var declareglobal = "variable";
console.log(declareglobal) //print variable
delete globalThis.declareglobal
console.log(declareglobal) //print variable
globalThis.canchangeproperty = "configurable global property with no let and no var";
console.log(canchangeproperty) //print configurable global property with no let and no var
delete canchangeproperty
try {
    console.log(canchangeproperty) //return error message
}
catch{
    console.log("canchangeproperty deleted") //print canchangeproperty deleted
}
let functioninsideproperty = {x:1, y:2, toString: function () {return `(${this.x},${this.y})`;}, toLocaleString: function () {return `(${this.x.toLocaleString()},${this.y.toLocaleString()})`;}};
console.log(String(functioninsideproperty)) //print (1,2).  toString() is used for string conversions.
console.log(functioninsideproperty) //print {x: 1, y: 2, toString: ƒ, toLocaleString: ƒ}
console.log(functioninsideproperty.toString()) //print (1,2)
console.log(functioninsideproperty.toLocaleString()) //print (1,2).  RM:  notice the letter e at the end of locale.
let functioninsideproperty2 = {x:4, y:5, valueOf: function() {return this.x+this.y;}}
console.log(functioninsideproperty2) //print {x: 4, y: 5, valueOf: ƒ}
console.log(functioninsideproperty2.x) //print 4
console.log(functioninsideproperty2.valueOf()) //print 9
let functioninsidepropertyiscalledmethod = {areaofsquare:  function() {return this.side*this.side;}, side:10}
console.log(functioninsidepropertyiscalledmethod) //print {side: 10, areaofsquare: ƒ}
console.log(functioninsidepropertyiscalledmethod.areaofsquare()) //print 100
const declareconstantfirst = "";
const symbolidontunderstand = Symbol();
let importvaluetoproperty = {"function is a method inside property"(importxvariable) {return importxvariable+1;}, [declareconstantfirst](importxvariable) {return importxvariable*2;}, [symbolidontunderstand](importxvariable){return importxvariable*100;}};
console.log(importvaluetoproperty["function is a method inside property"](1)) //print 2
console.log(importvaluetoproperty[declareconstantfirst](5)) //print 10
console.log(importvaluetoproperty[symbolidontunderstand](10)) //print 1000
let propertygettersetter = {xreadandwrite:1,yreadandwrite:2, get rgetter() {return (this.xreadandwrite*5, this.yreadandwrite*10);}, set rgetter(newvalue){let oldvalue = (this.xreadandwrite*5, this.yreadandwrite*10); let addition = newvalue+oldvalue;}};
console.log(propertygettersetter) //print {xreadandwrite: 1, yreadandwrite: 2}
console.log(propertygettersetter.rgetter) //print 20.  RM: prints the latest value or last value in rgetter like spreadpriority2 property
console.log(propertygettersetter.rgetter.addition) //print undefined
console.log(propertygettersetter.rgetter.xreadandwrite) //print undefined
console.log(propertygettersetter.rgetter.newvalue) //print undefined
let objectinheritspropertygettersetter = Object.create(propertygettersetter); //inheritance before inheritance section below
objectinheritspropertygettersetter.xreadandwrite = 333;
objectinheritspropertygettersetter.yreadandwrite = 444;
console.log(objectinheritspropertygettersetter) //print {x: 333, y: 444}
console.log(objectinheritspropertygettersetter.rgetter) //print 4440
let newoperatorcreatesinitializesnewobjects = new Object();
let newoperatorcreatesinitializesnewarray = new Array();
let newoperatorcreatesinitializesnewdate = new Date();
let newoperatorcreatesinitializesnewmap = new Map();

//Inheritance
console.log(Object.prototype) //print {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …} . . .
let inheritobjectmethodsfromobjectprototype = {};
inheritobjectmethodsfromobjectprototype.addpropertyx = 1;
inheritobjectmethodsfromobjectprototype.addpropertyy = 2;
console.log(inheritobjectmethodsfromobjectprototype) //print {addpropertyx: 1, addpropertyy: 2}
let inheritfrominheritobjectmethodsfromobjectprototypeandobjectprototype = Object.create(inheritobjectmethodsfromobjectprototype);
console.log(inheritfrominheritobjectmethodsfromobjectprototypeandobjectprototype) //print {}.  RM:  correct, doesn't print inheritobjectmethodsfromobjectprototype's addpropertyx and addpropertyy
inheritfrominheritobjectmethodsfromobjectprototypeandobjectprototype.addpropertyz = 3;
console.log(inheritfrominheritobjectmethodsfromobjectprototypeandobjectprototype) //print {addpropertyz: 3}
let q = Object.create(inheritfrominheritobjectmethodsfromobjectprototypeandobjectprototype);
console.log(q) //print {}
q.anothernumber = 44;
console.log(q) //print {anothernumber: 44}
console.log(q.inheritobjectmethodsfromobjectprototype) //print undefined.  RM:  how do you print all properties?
console.log(q.addpropertyx) //print 1
console.log(inheritobjectmethodsfromobjectprototype.addpropertyx) //print 1
console.log(q.anothernumber + q.addpropertyx) //print 45  44+1 from inheritobjectmethodsfromobjectprototype.addpropertyx equals 45.
let rookisalwaysone = {rook:1};
console.log(rookisalwaysone) //print {rook: 1}
let cookieinheritsrook = Object.create(rookisalwaysone);
cookieinheritsrook.addnumberx = 100;
cookieinheritsrook.addnumbery = 222;
cookieinheritsrook.rook = 8888;
console.log(cookieinheritsrook) //print {addnumberx: 100, addnumbery: 222, rook: 8888}
console.log(cookieinheritsrook.rook) //print 8888
console.log(rookisalwaysone.rook) //print 1

//Enumerating properties enumerate properties
let o3enumerableproperties = {x:1, y:2, z:3};
console.log(o3enumerableproperties) //print {x: 1, y: 2, z: 3}
console.log(o3enumerableproperties.propertyIsEnumerable("toString")) //print false.  Built-in methods that objects inherit are not enumerable, but the properties that your code adds to objects are enumerable by default.
for(let eacho3enumerableproperties in o3enumerableproperties) {
    console.log(eacho3enumerableproperties.toString() +" from for loop")
    /*
    x from for loop
    y from for loop
    z from for loop
    */
}

/* JavaScript The Definitive Guide By David Flanagan Chapter 07 Arrays */
/* An array is an ordered collection of values.  Each value is called an element.  Each element has a numeric position called an index.  An array may have different elements of different types.  Subarrays or an array inside another array is valid.  Indexing numbering starts at zero.  Maximum array is 4,294,967,295 elements. RM:  It's like a Python list.*/

let emptyarray = [];
let primenumbersarray = [2, 3, 5, 7, 11];
let miscarray = [1.1, true, "a", ];
let basenumber = 1024;
let tableaddbasenumber = [basenumber, basenumber+1, basenumber+2, basenumber+3];
let dictionaryinsidemultiplearray = [[1,{x:1, y:2}], [2,{x:3,y:4}]];
console.log(dictionaryinsidemultiplearray) //print 0 : Array(2) 0 : 1 1 : {x: 1, y: 2}\n 1 : Array(2) 0 : 2 1 : {x: 3, y: 4}
let countemptyindex = [1,,3];
console.log(countemptyindex) //print [1, empty, 3]
let undefsnoelements = [,,];
let ainersspreadoperator = [1,2,3];
let boutersspreadoperator = [0, ...ainersspreadoperator, 4]; //The three dots spread the array ainersspreadoperator for its elements become elements within the array literal being created
console.log(ainersspreadoperator.length) //print 3.  Count number of elements.
console.log(boutersspreadoperator) //print [0, 1, 2, 3, 4]
let originalspread = [1,2,3];
let copyspread = [...originalspread];
console.log(originalspread) //print [1,2,3]
console.log(copyspread) //print [1,2,3]
console.log(originalspread[0]) //print 1
console.log(copyspread[0]) //print 1
copyspread[0] = 99
console.log(copyspread[0]) //print 99.
console.log(originalspread[0]) //print 1.  Modify the copy does not change the original.
let digitsstringsiterable = [..."0123456789ABCDEF"];
console.log(digitsstringsiterable)  //print ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
let lettersiterable = [..."hello world"]
console.log(lettersiterable) //print ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
let aarrayempty = new Array();
console.log(aarrayempty) //print []
let aarrayemptytenelements = new Array(10);
console.log(aarrayemptytenelements) //print [empty × 10]
/* Use Array.of() for numeric elements to avoid confusion when numbers inside Array() define the number of elements such as let aarrayemptytenelements = new Array(10); */
console.log(Array.of(10)) //print [10]
console.log(Array.of(1,2,3)) //print [1, 2, 3]
let copyarray = Array.from(originalspread);
console.log(copyarray) //print [1, 2, 3]
let aindexing = ["world"];
console.log(aindexing[0]) //print world
let valuereadindexzero = aindexing[0];
console.log(valuereadindexzero) //print world
console.log(aindexing.length) //print 1.  One element "world".
/* A sparse array is the elements don't have contiguous indexes starting at zero.  The value of the length property is greater than the number of elements. */
let asparsearray = new Array(5);
console.log(asparsearray.length) //print 5
asparsearray[1000] = "Insert string array at index position 1000.  Increase length to 1001 from 0 to 1000 total count 1001";
console.log(asparsearray[999]) //print undefined
console.log(asparsearray[1000]) //print Insert string array at index position 1000.  Increase length to 1001 from 0 to 1000 total count 1001
console.log(asparsearray.length) //print 1001.  RM:  remember index numbering starts at 0
/* Use .length to delete elements and increase the array length */
let auselengthchangenumberelements = [1,2,3,4,5];
console.log(auselengthchangenumberelements) //print [1, 2, 3, 4, 5]
console.log(auselengthchangenumberelements.length) //print 5
auselengthchangenumberelements.length = 3;  //Change number of elements from 5 to 3
console.log(auselengthchangenumberelements) //print [1, 2, 3]
auselengthchangenumberelements.length = 0;  //Change number of elements from 3 to 0.  Delete all elements.
console.log(auselengthchangenumberelements) //print []
let aadddeleteelements = [];
aadddeleteelements[0] = "zero string";
aadddeleteelements[1] = "one string";
aadddeleteelements.push("add string at the end of the array")
console.log(aadddeleteelements) //print ['zero string', 'one string', 'add string at the end of the array']
aadddeleteelements.push("add string second to the end of the array","ADD STRING ABSOLUTE END OF THE ARRAY")
console.log(aadddeleteelements) //print ['zero string', 'one string', 'add string at the end of the array', 'add string second to the end of the array', 'ADD STRING ABSOLUTE END OF THE ARRAY']
delete aadddeleteelements[2] //Delete element value at index 2.  Not delete index 2.  Index 2 becomes empty.
console.log(aadddeleteelements) //print [['zero string', 'one string', empty, 'add string second to the end of the array', 'ADD STRING ABSOLUTE END OF THE ARRAY']
let lettersforloop = [..."Hello world"];
for (let eachlettersforloop of lettersforloop) { //RM:  it's for of.  Not for in.
    console.log(eachlettersforloop) //print Hello world each letter in its own line
}
for (let [index, value] of lettersforloop.entries()) {
    console.log(index, value) //print index number and the value of index number:  0 'H'\n 1 'e'\n 2 'l'\n 3 'l'\n . . .
}
let uppercaseforeach = "";
lettersforloop.forEach(lettersforloop => {
    uppercaseforeach += lettersforloop.toUpperCase();
});
console.log(uppercaseforeach) //print HELLO WORLD
let vowlesextractforloop = "";
for (let n = 0; n < lettersforloop.length; n++) { //RM:  semicolons separate the for loop condition
    if (/[aeiou]/.test(lettersforloop[n])) { //regular expression which was not taught yet
    vowlesextractforloop += lettersforloop[n];
    }
}
console.log(vowlesextractforloop) //print eoo
/* Array methods */
/*forEach() method iterates through an array invoking a function you specified for each element.  The function is the first argument.  forEach() then invokes your function with three arguments: the value of the array element, the index of the array element, and the array itself. If you only care about the value of the array element, you can write a function with only one parameter for which the additional arguments will be ignored */
let datanumbers = [1,2,3,4,5], sum = 0;
datanumbers.forEach(valuefunctionname=>{sum += valuefunctionname;})
console.log(sum) //print 15
/* The map() method passes each element of the array on which it is invoked to the function you specify and returns an array containing the values returned by your function. */
let amap = [1,2,3];
console.log(amap.map(x=>x*x)) //print [1, 4, 9]
//console.log(x) //print ReferenceError error message
let datanumbersmap = [1,2,3,4,5], summap = 0;
datanumbersmap.map(valuefunctionname=>{summap += valuefunctionname;})
console.log(summap) //print 15
let afilterreturnstrue = [1,2,3,4,5];
console.log(afilterreturnstrue.filter(lessthan3=>lessthan3<3)) //print [1, 2].  Return all numbers less than 3.
console.log(afilterreturnstrue.filter((allnumbers,eachnumber)=>eachnumber%2===0)) //print [1, 3, 5].  Remove all even numbers.  Filter all even numbers.  The double equal sign is deprecated.  Use strict equality operator === triple equals.  RM:  it should return even numbers.  Filter to return all even numbers.
let afindfindindex = [1,2,3,4,5];
console.log(afindfindindex.findIndex(returnindexnumber=>returnindexnumber===3)) //print 2
console.log(afindfindindex.findIndex(returnindexnumbers=>returnindexnumbers<3)) //print 0
console.log(afindfindindex.find(returnnumbersdivisibleby2=>returnnumbersdivisibleby2%2===0)) //print 2
console.log(afindfindindex.find(returnnumberslessthan3=>returnnumberslessthan3<3)) //print 1
console.log(afindfindindex.every(areallnumberslessthan10=>areallnumberslessthan10<10)) //print true
console.log(afindfindindex.every(areallnumberseven=>areallnumberseven%2===0)) //print false
console.log(afindfindindex.some(aresomenumberslessthan10=>aresomenumberslessthan10<10)) //print true
console.log(afindfindindex.some(aresomenumberseven=>aresomenumberseven%2===0)) //print true
console.log(afindfindindex.reduce((initialvalue0,initialarrayvalue)=>initialvalue0+initialarrayvalue,0)) //print 15.  The .reduce takes 0 and adds the initialarrayvalue 1  0+1=1.  1 becomes the initialvalue0.  The next initialarrayvalue is 2.  1+2=3.  3 becomes the initialvalue0.  The next initialarrayvalue is 3.  3+3=6.  6 becomes the initialvalue0.  The next initialarrayvalue is 4.  6+4=10.  10 becomes the initialvalue0.  The next initialarrayvalue is 5.  10+5=15.  15 becomes the initialvalue0 and the final.
console.log(afindfindindex.reduce((initialvalue1,initialarrayvalue)=>initialvalue1*initialarrayvalue,1)) //print 120.  The .reduce takes initialvalue1 1 and adds the initialarrayvalue 1  1*1=1.  1 becomes the initialvalue1.  The next initialarrayvalue is 2.  1*2=2.  2 becomes the initialvalue1.  The next initialarrayvalue is 3.  3*2=6.  6 becomes the initialvalue1.  The next initialarrayvalue is 4.  6*4=24.  24 becomes the initialvalue1.  The next initialarrayvalue is 5.  24*5=120.  120 becomes the initialvalue1 and the final.
let afindfindindexno1 = [3,4,5,6,7];
console.log(afindfindindexno1.reduce((noinitialvalue,initialarrayvalue)=>noinitialvalue*initialarrayvalue)) //print 2520.  No initial value at the second argument.  The .reduce uses the first value in afindfindindexno1 3.  initialarrayvalue 3  3*4=12.  12 becomes the noinitialvalue.  The next initialarrayvalue is 5.  12*5=60.  60 becomes the noinitialvalue.  The next initialarrayvalue is 6.  60*6=360.  360 becomes the noinitialvalue.  The next initialarrayvalue is 7.  360*7=2520.  2520 becomes the noinitialvalue and the final.
console.log(["flat method",["returns a new array",["to one level of nesting"]]]) //print 0 : "flat method" 1 : Array(2) 0 : "returns a new array" 1 : Array(1) 0 : "to one level of nesting" length : 1
let aspecifyhowmanyflat = [1,[2,[3,[4]]]];
console.log(aspecifyhowmanyflat.flat(1)) //print [1, 2, Array(2)]
console.log(aspecifyhowmanyflat.flat(2)) //print yy.js:120 (4) [1, 2, 3, Array(1)]
console.log(aspecifyhowmanyflat.flat(3)) //print yy.js:121 (4) [1, 2, 3, 4]
console.log(aspecifyhowmanyflat.flat(4)) //print yy.js:122 (4) [1, 2, 3, 4]
let initialconcatarray = ["first","initial","array","to combine"];
console.log(initialconcatarray) //print ['first', 'initial', 'array', 'to combine']
console.log(initialconcatarray.concat("second initial", "array")) //print ['first', 'initial', 'array', 'to combine', 'second initial', 'array']
console.log(initialconcatarray.concat(["third","array"],["fourth","array"])) //print ['first', 'initial', 'array', 'to combine', 'third', 'array', 'fourth', 'array']
console.log(initialconcatarray.concat("fifth",["sixth",["seventh"]])) //print ['first', 'initial', 'array', 'to combine', 'fifth', 'sixth', Array(1)]
console.log(initialconcatarray) //print ['first', 'initial', 'array', 'to combine']
let appendarrayattheend = ["initial value"];
appendarrayattheend.push("push method","add one or more elements","at the end of the array","pop deletes last element")
console.log(appendarrayattheend) //print ['initial value', 'push method', 'add one or more elements', 'at the end of the array', 'pop deletes last element']
appendarrayattheend.pop();
console.log(appendarrayattheend) //print ['initial value', 'push method', 'add one or more elements', 'at the end of the array']
savelastelementdeleted = appendarrayattheend.pop()
console.log(savelastelementdeleted) //print at the end of the array.  The last element furthest right assigned variable deleted.
let appendarrayatthebegin = ["initial value"];
appendarrayatthebegin.unshift("unshift method","add one or more elements","at the beginning of the array","shift deletes first element")
console.log(appendarrayatthebegin) //print ['unshift method', 'add one or more elements', 'at the beginning of the array', 'shift deletes first element', 'initial value']
appendarrayatthebegin.shift();
console.log(appendarrayatthebegin) //print ['add one or more elements', 'at the beginning of the array', 'shift deletes first element', 'initial value']
savefirstelementdeleted = appendarrayatthebegin.shift()
console.log(savefirstelementdeleted) //print add one or more elements.  The first element furthest left assigned variable deleted.
//Extract, replace, fill, copy slicing
let aslice = [1,2,3,4,5];
console.log(aslice) //print [1, 2, 3, 4, 5]
console.log(aslice.slice(0,3)) //print [1, 2, 3].  The returned array contains the element specified by the first argument and excluding up to the element specified by the second argument.
console.log(aslice.length)  //print 5
console.log(aslice.slice(3)) //print [4, 5].  If only one argument is specified, the returned array contains all elements from the start position to the end of the array.
console.log(aslice.slice(1,-1)) //print [2, 3, 4].  If either argument is negative, it specifies an array element relative to the length of the array. An argument of –1, for example, specifies the last element in the array, and an argument of –2 specifies the element before that one.
console.log(aslice.slice(-3,-2)) //print [3]
console.log(aslice.slice(-3,-1)) //print [3, 4]
console.log(aslice.slice(-3,-1,-1)) //print [3, 4]
console.log(aslice.slice(-3,1)) //print []
console.log(aslice.slice(1,-3)) //print []
//splice() method inserts or removes.  Permanently modifes the array.  Elements of the array that come after the insertion or deletion point have their indexes increased or decreased as necessary so that they remain contiguous with the rest of the array. The first argument to splice() specifies the array position at which the insertion and/or deletion is to begin. The second argument specifies the number of elements that should be deleted from (spliced out of) the array.  If this second argument is omitted, all array elements from the start element to the end of the array are removed.
let asplice1 = [1,2,3,4,5,6,7,8];
console.log(asplice1) //print [1, 2, 3, 4, 5, 6, 7, 8]
asplice1.splice(4)
console.log(asplice1) //print [1, 2, 3, 4]
let asplice2 = [1,2,3,4,5,6,7,8];
console.log(asplice2) //print [1, 2, 3, 4, 5, 6, 7, 8]
asplice2.splice(1,2)
console.log(asplice2) //print [1, 4, 5, 6, 7, 8]
let asplice3 = [1,2,3,4,5,6,7,8];
console.log(asplice3) //print [1, 2, 3, 4, 5, 6, 7, 8]
asplice3.splice(1,1)
console.log(asplice3) //print [1, 3, 4, 5, 6, 7, 8]
let asplice4 = [1,2,3,4,5,6,7,8];
console.log(asplice4) //print [1, 2, 3, 4, 5, 6, 7, 8]
asplice4.splice(3,4)
console.log(asplice4) //print [1, 2, 3, 8]
//The first two arguments to splice() specify which array elements are to be deleted. These arguments may be followed by any number of additional arguments that specify elements to be inserted into the array, starting at the position specified by the first argument.
let asplicereplaceelements1 = [1,2,3,4,5];
console.log(asplicereplaceelements1) //print [1, 2, 3, 4, 5]
asplicereplaceelements1.splice(2,0,"replace with two strings starting at index 2","and only index 2 with the ,0,")
console.log(asplicereplaceelements1) //print [1, 2, 'replace with two strings starting at index 2', 'and only index 2 with the ,0,', 3, 4, 5]
let asplicereplaceelements2 = [1,2,3,4,5,6];
console.log(asplicereplaceelements2) //print [1, 2, 3, 4, 5, 6]
asplicereplaceelements2.splice(1,3,"replace with three strings starting at index 1","two replaced","three replaced")
console.log(asplicereplaceelements2) //print [1, 'replace with three strings starting at index 1', 'two replaced', 'three replaced', 5, 6]
let fillmethodsetselements = new Array(5);
console.log(fillmethodsetselements.fill(0)) //print [0, 0, 0, 0, 0]
console.log(fillmethodsetselements.fill(99,1)) //print [0, 99, 99, 99, 99]
console.log(fillmethodsetselements.fill(888,2,-1)) //print [0, 99, 888, 888, 99].  The first argument to fill() is the value to set array elements to. The optional second argument specifies the starting index. If omitted, filling starts at index 0. The optional third argument specifies the ending index—array elements up to, but not including, this index will be filled.
/*
copyWithin() copies a slice of an array to a new position within the array. It modifies the array in place and returns the modified array, but it will not change the length of the array. The first argument specifies the destination index to which the first element will be copied. The second argument specifies the index of the first element to be copied. If this second argument is omitted, 0 is used. The third argument specifies the end of the slice of elements to be copied. If omitted, the length of the array is used. Elements from the start index up to, but not including, the end index will be copied. You can specify indexes relative to the end of the array by passing negative numbers,
*/
let copyslicewithin = [1,2,3,4,5,6,7,8];
console.log(copyslicewithin.copyWithin(1)) //print [1, 1, 2, 3, 4, 5, 6, 7]
console.log(copyslicewithin.copyWithin(2,3,5)) //print [1, 1, 3, 4, 4, 5, 6, 7]
console.log(copyslicewithin.copyWithin(0, -2)) //print [6, 7, 3, 4, 4, 5, 6, 7]
let indexposition = [0,1,2,1,0];
console.log(indexposition.indexOf(1)) //print 1.  The first 1 is at index position 1.
console.log(indexposition.lastIndexOf(1)) //print 3.  The last 1 from the right side is at index position 3.
console.log(indexposition.indexOf(2)) //print 2.  The 2 is at index position 3.
console.log(indexposition.indexOf(1,3)) //print 3.  Start searching for the number 1 and index position 3.
console.log(indexposition.lastIndexOf(1,-3)) //print 1.  Start searching for 1 starting from the right side three index numbers from the right to the left.
console.log(indexposition.includes(2)) //print true.  Check for value in array.  Check for element in array.  Find value.  Find element.
let sortelements = ["sort values","or sort elements","in an array","sorted array"]
console.log(sortelements.sort()) //print ['in an array', 'or sort elements', 'sort values', 'sorted array']
console.log(sortelements.reverse()) //print ['sorted array', 'sort values', 'or sort elements', 'in an array']
let converttostring = [1,2,3];
console.log(converttostring.join()) //print 1,2,3
//same as
console.log(converttostring.toString()) //print 1,2,3
console.log(typeof(converttostring.join())) //print string
console.log(converttostring.join("*separate with a space*")) //print 1*separate with a space*2*separate with a space*3
console.log(converttostring.join("*noseparate*")) //print 1*noseparate*2*noseparate*3
let tenblankelements = new Array(10)
console.log(tenblankelements.length) //print 10
console.log(tenblankelements.join("-")) //print ---------.  9 hyphens confirmed.  RM:  makes sense.  The converttostring variable joins the length minus 1 with number of separators.
let checkarray = ["check is array","confirm array","array is true"];
console.log(Array.isArray(checkarray)) //print true

/* JavaScript The Definitive Guide By David Flanagan Chapter 08 Functions */
/* Definition:  A function is a block of JavaScript code that is defined once but may be executed, or invoked, any number of times. JavaScript functions are parameterized: a function definition may include a list of identifiers, known as parameters, that work as local variables for the body of the function. Function invocations provide values, or arguments, for the function’s parameters. Functions often use their argument values to compute a return value that becomes the value of the function-invocation expression. In addition to the arguments, each invocation has another value—the invocation context— that is the value of the this keyword. */
/* Function declarations consists of the function keyword, an identifier naming the function which is a variable, a pair of parentheses around a comma separated list of zero or more identifiers or parameters, and a pair of curly braces with zero or more statements which is the body of the function. */
function functionname(identifierone, identifiertwo, identifierthree) {
    console.log("statements")
}
let invokefunction = functionname("apple","bananna","grape"); //return statements
const functionexpression = function(x) {return console.log("Another type of function.  Function expression.",x)};
console.log(functionexpression(9876)) //print Another type of function.  Function expression. 9876\n undefined
let invokethefunctionexpression = functionexpression(777777);
console.log(invokethefunctionexpression) //print Another type of function.  Function expression. 777777\n undefined
let anotherfunctionexpression = (function(x) {return x*x;}(10));
console.log(anotherfunctionexpression) //print 100
const arrowfunction = (x,y) => {return x+y};
let callsamefunctionstwice = arrowfunction(100,200) + arrowfunction(1111,2222);
console.log(callsamefunctionstwice) //print 3633.  300+3333.
const sumarrowfunction = (x,y) => x+y;
let callsamefunctionstwice2 = sumarrowfunction(100,200) + sumarrowfunction(1111,2222);
console.log(callsamefunctionstwice2) //print 3633.  300+3333.
const noargumentsarrowfunction = () => 42;
console.log(noargumentsarrowfunction) //print () => 42
const fstring = x => {return {value: x};};
const gstring = x => ({value: x});
console.log(gstring({x:-43})) //print {value: {…}} . . . -43
const statementarrowfunction = () => {return console.log("Arrow functions uses arrow => to separate function parameters from the function body.  No function keyword.")};
function nestedfunction(a,b) {
    function square(x) {return x*x;}
    return a+b;
}
let invokefunctionvariable = nestedfunction({x:25,y:50});
console.log(invokethefunctionexpression) //printed undefined
//Method invocation.  A method is a JavaScript function stored in a property of an object.  Define a method of the object object.method=function.  Invoke it by object.method().  If method() expects two arguments, then invoke it by object.method(argument1,argument2);
let calculatorobject = {
    operand1:1,
    operand2:2,
    addmethod(){
        this.result = this.operand1+this.operand2;
    }
};
calculatorobject.addmethod();
console.log(calculatorobject.result) //print 3
let assignvariabletoprint = calculatorobject["addmethod"](111,222);
console.log(assignvariabletoprint) //print undefined
console.log(calculatorobject["addmethod"](111,222)) //print undefined
let oobject = {
    methodofoobject: function() {
        let selfvariable = this;
        this === 0
        fhelperfunction();
        function fhelperfunction() { //nested function fhelperfunction
            this === 0 //false because this is a global variable or undefined
            selfvariable === 0; //true because selfvariable is the outer this variable
        }
    }
};
oobject.methodofoobject(); //invoke the methodmethodofobject on the object oobject
console.log(oobject.methodofoobject()) //print undefined
function argumentsparameters(o, a){
    return o+a;
}
let o = {x:1}, p = {y:2, z:3};
let a = argumentsparameters(o);
console.log(a) //print [object Object]undefined
console.log(argumentsparameters(p,a)) //print [object Object][object Object]undefined
function squarenumbers(x) {
    return x*x;
}
console.log(squarenumbers(7)) //print 49
let squarevariable = squarenumbers
console.log(squarevariable(7)) //print 49
let objectproperty = {createmethodsquare: function(x) {return x*x;}};
let functionmethod = objectproperty.createmethodsquare(49);
console.log(functionmethod) //print 2401
let arrayliteral = [x=>x*x, 20];
console.log(arrayliteral[0]) //print x=x*x
console.log(arrayliteral[1]) //print 20
console.log(arrayliteral[0](arrayliteral[1])) //print 400
function simplefunctionadd(x,y) {return x+y;}
console.log(simplefunctionadd(1,5)) //print 6
function operate(operation, operand11, operand22) {
    return operation(operand11, operand22);
}
// let invokefunction2 = operate(add2, operate(add2,2,3), operate(multiply,4,5)); //print Uncaught ReferenceError: add2 is not defined
const operators = {
    add2:(x,y)=>x+y,
    subtract:(x,y)=>x-y,
    multiply:(x,y)=>x*y,
    divide:(x,y)=>x/y
};
function operate2(operation, operand11, operand22){
    return operators[operation](operand11, operand22);
}
console.log(operate2("add2", 10,2)) //print 12
let variablescope = "global variable";
function checkscope(){
    let variablescope = "local variable";
    function fvalue() {return variablescope;}
    return fvalue;
}
console.log(checkscope()) //print ƒ fvalue() {return variablescope;}
checkscope()
let uniqueinteger = (function() {
    let counter = 0;
    return function() {return counter++;};    
}());
console.log(uniqueinteger()) //print 0
console.log(uniqueinteger()) //print 1
console.log(uniqueinteger()) //print 2
console.log(uniqueinteger()) //print 3
//like Python Classes
function counter() {
    let n = 0;
    return {
        count: function() {return n++;},
        reset: function() {n=0;}
    };
}
let ccounter1 = counter(), dcounter2 = counter();
console.log(ccounter1.count()) //print 0
console.log(dcounter2.count()) //print 0
console.log(ccounter1.count()) //print 1
console.log(dcounter2.count()) //print 1
console.log(ccounter1.count()) //print 2
ccounter1.reset();
console.log(ccounter1.count()) //print 0
console.log(dcounter2.count()) //print 2
function counterwithinput(n) {
    return {
        get count() {return n++;},
        set count(m) {
            if (m>n)n=m;
            else throw Error("Count can only be set to a larger value");
        }
    };
}
let cvariable = counterwithinput(1000);
console.log(cvariable.count) //print 1000
console.log(cvariable.count) //print 1001
console.log(cvariable.count) //print 1002
console.log(cvariable.count) //print 1003
cvariable.count = 2000;
console.log(cvariable.count) //print 2000
console.log(cvariable.count) //print 2001
// cvariable.count = 2000; //return  Error: Count can only be set to a larger value