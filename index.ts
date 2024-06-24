#! /usr/bin/env node


import inquirer from "inquirer"

//  1) Generate a random number in code.
// 2) Get an input number from user
// 3) Check user number and show result.

const compGuess = Math.trunc(Math.random()* 10 + 1)

// console.log(compGuess)
// console.log(typeof compGuess)


const answer = await inquirer.prompt([
    {
        message:"Guess a number and Enter to check:",
        type:"number",
        name:"userGuess"
    }
])

console.log('user input is:', answer.userGuess)

// Check user input and show result:

if(answer.userGuess === compGuess) {
    console.log('You guessed right number.')
} 
else if (answer.userGuess < compGuess) {
    console.log('You guessed a LOW number')
}
else if (answer.userGuess > compGuess) {
    console.log('You guessed a HIGH number')
}

