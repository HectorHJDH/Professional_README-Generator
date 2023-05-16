// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        name: 'license',
        choices: [
            'NO LICENSE',
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
function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
    
    fs.writeFile(fileName, content, 'utf8', (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README file created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();