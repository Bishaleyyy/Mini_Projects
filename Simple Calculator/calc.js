let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
let output = document.getElementById("out");
let buttonAdd = document.getElementById("add");
let buttonSub = document.getElementById("sub");
let buttonMult = document.getElementById("mult");
let buttonDiv = document.getElementById("div");
let buttonEqual = document.getElementById("equal");

let operator = "";

buttonAdd.addEventListener("click", function(){
    operator = "+";
});

buttonSub.addEventListener("click", function(){
    operator = "-";
});

buttonMult.addEventListener("click", function(){
    operator = "*";
});

buttonDiv.addEventListener("click", function(){
    operator = "/";
});

buttonEqual.addEventListener("click", function(){
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let result = 0;
    
    switch(operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Error";
    }

    output.value = result;
});
