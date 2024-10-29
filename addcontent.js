// JavaScript & jQuery by Jon Duckett
let today = new Date();
let hourNow = today.getHours();
let yearNow = today.getYear();
let correctYear = yearNow+1900;
let greeting;
document.write(hourNow); //print 11
if (hourNow > 18) {
    greeting = "Good evening!";
} else if (hourNow > 12) {
    greeting = "Good afternoon!";
} else if (hourNow > 0) {
    greeting = "Good morning!";
} else {
    greeting = "Welcome!  The Date() is not working.";
}
document.write("<p>");
document.write("<h3>"+greeting+"</h3>"); //print Good morning!
document.write("<p>");
document.write("Try to print the year "+yearNow); //print Try to print the year 124
document.write("<p>");
document.write("Try to print the year adding 1900 "+correctYear); //print correctYear
document.write("<p>");
document.write("Copyright &copy; "+correctYear+"-1998 Raymond Mar All Rights Reserved") //print Copyright C 2024-1998 Raymond Mar All Rights Reserved
document.write("<p>");
document.write("<b>Copyright &copy; "+correctYear+"-1998 Raymond Mar All Rights Reserved</b>") //print Copyright C 2024-1998 Raymond Mar All Rights Reserved RM:  sentence is bolded