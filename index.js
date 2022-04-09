// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your ReadMe? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a Title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'purpose',
            message: 'What is the description for this ReadMe? (Required)',
            validate: purposeInput => {
                if (purposeInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the live website link? (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter the Live Website Link!');
                    return false;
                }
            }
        }
    ]);
}
// TODO: Create a function to write README file
fs.writeFile('README.md',)

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
