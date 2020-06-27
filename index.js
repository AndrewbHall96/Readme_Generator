var inquirer = require("inquirer");
var fs = require("fs");


// array of questions for user
const questions = [
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
        message:"List the contents of your Readme",
        name:"tableOfCont"
    },
    {
        type:"input",
        message:"What are the steps required to  install your project?",
        name:"instillation"
    },
    //liscense goes here
    {
        type:"input",
        message:"list contributers ",
        name:"collaborative"
        //how will i handle multiple peeps
    },

]   


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions).then(function(userAnswers) {
        console.log(userAnswers);

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



//Place in different file. 
// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

#description
${data.description}

#Table Of Contents
${data.tableOfCont}

# Installation
${data.installation}

`;
  }
  
//   module.exports = generateMarkdown;
  
  