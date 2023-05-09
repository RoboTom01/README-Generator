// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage information for other users for this project?",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
            "Apache",
            "Boost",
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "MIT",
            "Mozilla",
        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "Can people contribute to your project, if so how?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the testing protocols you used for your project?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email?",
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        answers.licenseBadge = licenseBadge(answers.license);
        let readMeData = generateMarkdown(answers);
        writeToFile();
    } catch (err) {
        throw err;
    }
}

// Function call to initialize app
init();
