/* JavaScript The Definitive Guide By David Flanagan Chapter 03 Types, Values, And Variables */
const declareconstants = "Constant string";
let declarevariables;
var declarevariablesolderjavascript;

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

/* Common escape characters:  \0 The NUL character (\u0000), \b Backspace (\u0008), \t Horizontal tab (\u0009), \n Newline (\u000A), \v Vertical tab (\u000B) */

//Common string properties
let samplestring = "Hello, world";
console.log(samplestring.substring(1,4)) //print ell
console.log(samplestring.slice(1,4)) //print ell
console.log(samplestring.slice(-3)) //print rld
console.log(samplestring.split(", ")) //print ['Hello', 'world']