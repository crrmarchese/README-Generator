// Include inquirer.js
const inquirer = require('inquirer');
// Include Node.js built-in File System package
const fs = require('fs');

// Questions for user input

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project_name',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'project_description',
    },
    {
        type: 'input',
        message: 'Please enter your project installation requirements',
        name: 'installation_req',
    },
    {
        type: 'input',
        message: 'Please provide instructions for use',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide test instructions',
        name: 'test_instructions',
    },
    {
        type: 'input',
        message: 'Credits',
        name: 'credits',
    },
  ])

  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();





