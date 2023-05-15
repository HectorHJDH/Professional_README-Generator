// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Please introduce the Title of your project:'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please write the description of your project:'
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'Please introduce the table of contents of the project:'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Introduce installation steps:'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Introduce an usage description:'
    },
    {
        type: 'list',
        name: 'License',
        choices: [
            'Apache', 
            'Creative Commons', 
            'BSD', 
            'Eclipse',
            'GNU',
            'IBM',
            'ISC',
            'MIT',
            'Mozilla',
            'Open Data Commons',
            'Perl',
            'Unlicense',
            'WTFPL',
            'Zlib'
        ],
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Write the contributors:'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Write the tests:'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Write the question:'
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile("README.md", data, (err) => {
      if (err) throw err;
      console.log("README.md file has been created successfully!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions).then(writeToFile(data));
}

// Function call to initialize app
init();
