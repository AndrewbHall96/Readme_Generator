const inquirer = require("inquirer");
const fs = require("fs");
const {createGeneratedContent, generateMarkdown} = require("./utils.js");

// array of questions for user
const questions = [
    {
        type:"input",
        message: "What is your name?",
        name: "name"
    },
    { 
        type:"input",
        message: "What is your github email?",
        name: "email"
    },
    {
        type:"input",
        message: "What is the Title of your project?",
        name: "title"
    },
    {
        type:"input",
        message: "Enter the Readme.md's description here:",
        name:"description"
    },
    {
        type:"input",
        message:"Provide instructions and examples for use.",
        name:"Usage"
    },
    {
        type:"list",
        choices: ["No License", "MIT", "GNU APGLv3", "GNU GPLv3", "GNU LGPLV3", 
                  "Mozilla Public 2.0", "Apache 2.0", "Boost Software 1.0", "The Unlicense"],
        message:"License? ('enter' to skip)",
        name:"license"
    },
    {
        type:"input",
        message:"Contributing ('enter' to skip)",
        name:"contributing"
    },
    {
        type:"input",
        message:"Tests? ('enter' to skip)",
        name:"test"
    },
    {
        type:"confirm",
        default: true,
        message:"Would you like to include the GitHub Followers badge?",
        name:"followers"
    }
]   

// Table of Contents format: do a * space [name shown] (#link to section)

// MARKDOWN - Not JS
// Gary Bergman  3 days ago
// *  [Installation](#Installation)
//    [test](google.com)
//    test
//    #Installation
// * [asdfasdf](actual link)


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions).then(function(userAnswers) {
        let filename = userAnswers.title + ".md";
        let markdownData = createGeneratedContent(userAnswers);
        let content = generateMarkdown(markdownData);

        fs.writeFile(filename, content, err => {
            err ? console.log(err)
                : console.log("Your Readme is generated to an .md!")
        })
        //ternary operator. First if its true, second is false. Logging error.

    })
}

// function call to initialize program
init();

// //API model:
// //US Stats tracker API below

// let statsURL = "https://api.covid19api.com/total/country/united-states";

// // console.log(statsURL)

// $.ajax({
//     url: statsURL,
//     method: "GET"
// }).then(function(statsAmerica) {