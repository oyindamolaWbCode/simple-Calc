let num1 = 10;
let num2 = 15;

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Get where to display result
let sumEl = document.getElementById("sum-el")

//create four functions: add(), subtract(), divide(), multiply()
function add(){
    //to separate string from number
    let result = num1 + num2 

    sumEl.textContent = "Total: " + result
}
function subtract(){
    //to separate string from number
    let result = num1 - num2 

    sumEl.textContent = "Total: " + result
}

function divide(){
    //to separate string from number
    let result = num1 / num2 

    sumEl.textContent = "Total: " + result
}

function multiply(){
   //to separate string from number
   let result = num1 * num2 

   sumEl.textContent = "Total: " + result
}