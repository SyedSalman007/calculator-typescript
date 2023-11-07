import inquirer from "inquirer";
import { addition, subtraction, multiplication, division } from "./functionality.js";
async function operate() {
    let inputValues = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter first number: ",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter second number: ",
        },
        {
            name: "operator",
            type: "list",
            message: "Select the desire operation:",
            choices: ["Add", "Subtract", "Multiply", "Divide"],
        },
    ]);
    if (inputValues.operator === "Add") {
        let result = addition(inputValues.num1, inputValues.num2);
        console.log(`\n\nResult: ${result}`);
    }
    else if (inputValues.operator === "Subtract") {
        let result = subtraction(inputValues.num1, inputValues.num2);
        console.log(`\n\nResult: ${result}`);
    }
    else if (inputValues.operator === "Multiply") {
        let result = multiplication(inputValues.num1, inputValues.num2);
        console.log(`\n\nResult: ${result}`);
    }
    else {
        let result = division(inputValues.num1, inputValues.num2);
        console.log(`\n\nResult: ${result}`);
    }
}
operate();
