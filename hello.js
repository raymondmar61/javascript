console.log("Hello World!  filename hello.js") //print Hello World!  filename hello.js
let declarevariablex;
declarevariablex = "value is 0";
console.log(declarevariablex) //print value is 0
variablex = true;
variabley = null;
variablez = undefined;
console.log(variablex) //print true
console.log(variabley) //print null
console.log(variablez) //print undefined
let declareobject = {topic:"javascript",edition:7};
console.log(declareobject.topic); //print javascript
console.log(declareobject["edition"]); //print 7
declareobject.author="Add author to declareobject Flanagan";
declareobject.contents = {}; //declareobject is empty with no name and value pairs
let declarenumberarray = [2, 3, 5, 7];
console.log(declarenumberarray[0]) //print 2
console.log(declarenumberarray.length) //print 4
console.log(declarenumberarray.length-1) //print 3
declarenumberarray[4] = 9
console.log(declarenumberarray) //print [2, 3, 5, 7, 9]
declarenumberarray[4] = 79
console.log(declarenumberarray) //print [2, 3, 5, 7, 79]
let declareemptyarray = []
console.log(declareemptyarray.length) //print 0
let arraytwoelementseachelementanobject = [{x:0, y:0},{x:1, y:2}];
let objecttwopropertieseachpropertyanarray = {trial1:[[1, 2], [33, 44]],trial2:[[111, 222], [333, 444]]};
let count = 0;
console.log(count++); //print 0
console.log(count++); //print 1
console.log(count+=2); //print 4
console.log(count*=3); //print 12
console.log(2===3) //print false
console.log(2!==3) //print true
console.log((2===2) && (5===5)) //print true
console.log((5===9)) //print false
console.log((2===2) && (5===9)) //print false
console.log((2===2) || (5===9)) //print true
function declarefunction(inputvariable){
    return inputvariable+100
}
console.log(declarefunction(7)) //print 107
let functionvarable = function(inputvariable2){
    return inputvariable2*inputvariable2
}
console.log(functionvarable(declarefunction(9))) //print 11881.  declarefunction returns 109.  functionvariable returns 109*109=11,881.
const quickdefinefunctionadd = inputvariable => inputvariable+1
const quickdefinefunctionsquare = inputvariable => inputvariable*inputvariable
console.log(quickdefinefunctionadd(10)) //print 11
console.log(quickdefinefunctionsquare(5)) //print 5
console.log(quickdefinefunctionsquare(quickdefinefunctionadd(9))) //print 100.  quickdefinefunctionadd returns 10.  quickdefinefunctionsquare returns 10*10=100
let emptystringarray = [];
emptystringarray.push("push method","adds elements","to an array")
console.log(emptystringarray)  //print ['push method', 'adds elements', 'to an array']
emptystringarray.reverse()
console.log(emptystringarray) //print ['to an array', 'adds elements', 'push method']
function ifelse(x){
    if (x >= 0){
        return "positive number";
    }
    else {
        return ("negative number");
    }
}
console.log(ifelse(10)) //print positive number
console.log(ifelse(-10)) //print negative number
function forloop(sumthesearraynumbers){
    let sumnumber = 0;
    for (let x of sumthesearraynumbers){
        sumnumber += x
    }
    return sumnumber
}
console.log(forloop([2, 4, 6, 8, 10])) //print 30
function whileloop(factorialnumber){
    let productnumber = 1;
    while (factorialnumber > 1){
        productnumber *=factorialnumber
        factorialnumber--;
    }
    return productnumber;
}
console.log(whileloop(5)) //print 120.  5*4*3*2=120
class Objectorientedprogramming {
    constructor(constructorfunction, initializenewinstances) {
        this.x = constructorfunction;
        this.y = initializenewinstances;
    }
    multiplytwonumbers() {
        return this.x*this.y;
    }

}
let oopclass1 = new Objectorientedprogramming(7,10);
console.log(oopclass1.multiplytwonumbers()) //print 70
let oopclass2 = new Objectorientedprogramming(10,20);
console.log(oopclass2.multiplytwonumbers()) //print 200