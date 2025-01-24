window.onload = writeMessage;
window.onload = initAll;
window.onload = handleErrors;  //It seems JavaScript can't load multiple window.onloads.  Try to remember to keep in mind.
function writeMessage() {
    document.getElementById("ptagid").innerHTML = "Print sentence from external JS file externalscriptchapter02.js";    
}
function initAll() {
    document.getElementById("redirect").onclick = initRedirect;
    document.getElementById("Lincoln").onclick = saySomething;
    document.getElementById("Kennedy").onclick = saySomething;
    document.getElementById("Nixon").onclick = saySomething;
}
function initRedirect() {
    alert("Alert pop up box before visting hello.html");
    window.location = "hello.html";
    return false;
}
function saySomething() {
    switch(this.id) {
        case "Lincoln": alert("Four score and seven years ago...");
            break;
        case "Kennedy": alert("Ask not what your country can do for you...");
            break;
        case "Nixon": alert("I am not a crook!");
            break;
        default: alert("Input error.");
    }
}
function handleErrors() {
    var answerprompt = prompt("Enter a nonnumber to practice error handling and try throw catch.");
    try {
        if (!answerprompt || isNaN(answerprompt) || answerprompt<0) {
            throw new Error("Not a valid number.  No entry or nonnumber entry or negative number.");
        }
        alert("The square root of "+answerprompt+" is "+Math.sqrt(answerprompt));
    }
    catch (errMsg) {
        alert("catch statement after try and throw statements.  Print the throw new Error(): "+errMsg.message);
    }
}