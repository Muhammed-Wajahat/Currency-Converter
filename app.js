#! /usr/bin/env node
import inquirer from "inquirer";
let convertion = {
    PKR: {
        USD: 0.0036,
        GBP: 0.0029,
        PKR: 1,
    },
    GBP: {
        USD: 1.24,
        PKR: 344.57,
        GBP: 1,
    },
    USD: {
        PKR: 278.13,
        GBP: 0.81,
        USD: 1,
    },
};
const answer = await inquirer.prompt([
    {
        name: "form",
        type: "list",
        message: "please enter a your currency:",
        choices: ["PKR", "USD", "GBP"],
    },
    {
        name: "to",
        type: "list",
        message: "please enter a your covertion currency:",
        choices: ["PKR", "USD", "GBP"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter a your covertion amount:",
    },
]);
const { form, to, amount } = answer;
if (form && to && amount) {
    let result = convertion[form][to] * amount;
    console.log(`your converstion from ${form} to ${to} is: ${result}`);
}
else {
    console.log("Invalid input");
}
