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