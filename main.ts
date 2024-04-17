#! /usr/bin/env node

// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";

// Declear a constant 'answer' and assign it to the result of inquirer.prompt function

const  answers:{
    Sentence: string 
}  = await  inquirer.prompt([
    {
           name: "Sentence",
           type: "input",
           message: "Enter your sentence to count the words: "
}
])

const words = answers.Sentence.trim().split(" ")

// print the array of word to the console
console.log(words);

// print the word count of the sentence  to the console
console.log(`Your sentence word count is ${words.length}`);


