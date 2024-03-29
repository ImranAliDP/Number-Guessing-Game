#! /usr/bin/env node
import inquirer from "inquirer";
const radomNumber = Math.floor(Math.random() * 6);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number: ",
    },
]);
if (answer.userGuessedNumber === radomNumber) {
    console.log("Congratulation ! You win.....");
}
else {
    console.log("You Guess Wrong Number");
}
