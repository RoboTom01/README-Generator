// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");
const licenseBadge = require("./utils/licenseBadge");

// import { generateMarkdown, licenseBadge } from './utils/generateMarkdown.js';

// Array of questions for user input
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

// Function to initialize app and write README file
async function init() {
    try {
        console.log("Tip: You can use <br /> as a line break.")
        const answers = await inquirer.prompt(questions);
        // Takes license answer and applies the correct name, link, and badge for the README data.
        answers.license = licenseBadge(answers.license);
        // Finalizes data into "let"
        let readMeData = generateMarkdown(answers);
        console.log(readMeData);
        // Uses fs to write new .md file
        fs.writeFileSync('new-README.md', readMeData)
    } catch (err) {
        throw err;
    }
}

// Function call to initialize app
init();
