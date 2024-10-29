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