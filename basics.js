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