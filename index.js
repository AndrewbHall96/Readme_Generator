var inquirer = require("inquirer");
var fs = require("fs");
var tableGen = require("./utils.js");


// array of questions for user
const questions = [

    {
        type:"input",
        message: "What is your github  username?",
        name: "username"
    },

    { type:"password",
        message: "What is your github  password?",
        name: "password"
    },
    { type:"input",
        message: "What is your github  repo?",
        name: "repo"
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
        type:"input",
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
        type:"input",
        message:"Would you like to include a badge?",
        name:"confirm"
    }
]   


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions).then(function(userAnswers) {
    
    tableGen(userAnswers)


        var filename = userAnswers.title + ".md";
        var content =  generateMarkdown(userAnswers);
        fs.writeFile(filename, content, err => {
            err = "error"
            err ? console.log(err)
                : console.log("Your Readme is generated to an .md!")
        })
        //ternary operator. First if its true, second is false. Logging  error.

    })
}

// function call to initialize program
init();


//create function that generates a Markdown only for prompts that they enter input in.

//Place in different file. 
// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

# description
${data.description}

# Table Of Contents
${data.tableOfCont}

# Installation
${data.installation}

#Usage
${data.usage}

`;
  }
  
//   module.exports = generateMarkdown;

// //API model:
// //US Stats tracker API below

// var statsURL = "https://api.covid19api.com/total/country/united-states";

// // console.log(statsURL)

// $.ajax({
//     url: statsURL,
//     method: "GET"
// }).then(function(statsAmerica) {
  