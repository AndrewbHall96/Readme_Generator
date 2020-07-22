const fs = require("fs");
const {createGeneratedContent, generateMarkdown} = require("./utils.js");

let testobj = {
    username: 'andrewbhall96',
    email: 'andrewbhall@oogga.com',
    title: 'Readme Generator',
    description: 'Our awesome project',
    Usage: 'Just run it, fool',
    license: 'No License',
    contributing: 'Barney',
    test: 'node run tests',
    followers: false
};

let licenseWithSpaces = {
    username: 'andrewbhall96',
    email: 'andrewbhall@oogga.com',
    title: 'Readme Generator',
    description: 'Our awesome project',
    installation: 'download',
    usage: 'Just run it, fool',
    license: 'Boost Software 1.0',
    contributing: '',
    test: 'node run tests',
    followers: true
};

let content = createGeneratedContent(licenseWithSpaces);

let markdown = generateMarkdown(content);

fs.writeFile("test.md", markdown, err => {
    err ? console.log(err)
        : console.log("Your Readme is generated to an .md!")
})