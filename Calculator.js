function claculator(num1, num2, operator) {
    let result=null;
    //switch

    switch (operator) {
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
            console.log("Invalid operator")
    }
    
    console.log("Result:" + result)
}

//input
let num1 = 3
let num2 = 2
let operator = "+"
claculator(num1, num2, operator)