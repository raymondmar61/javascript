/* Web Programming with HTML5, CSS, and JavaScript by John Dean Chapter 10 Loops, Additional Controls, Manipulating CSS With JavaScript */
/* hello.html is the html file to display the JavaScript on Chrome. */
let numberoffactorials = 5;
let initialfactorial = 1;
let count = 1;
while (count <= numberoffactorials) {
    initialfactorial *= count;
    count++;
    document.write(initialfactorial,"<br>")
    /*
    1
    2
    6
    24
    120
    */
}
do {
    let numberoffactorials = 5;
    let initialfactorial = 1;
    let count = 1;
    initialfactorial *= count;
    count++;
    document.write(initialfactorial,"<br>")
    /*
    1
    */
}   while (count <= numberoffactorials);
initialfactorial = 1;
for (count=1; count<=numberoffactorials; count++) {
    initialfactorial *= count;
    document.write(initialfactorial,"<br>")
    /*
    1
    2
    6
    24
    120
    */
}