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
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list your collaborators or third-party assets that require attribution.',
        name: 'credits',
    },
    {
      type: 'checkbox',
      message: 'Please choose a license.',
      choices: [
        'Apache 2.0',
        'BSD',
        'GNU',
        'ISC',
        'MIT',
        'None',
        'The Unlicense',
      ],
    },
    {
        type: 'input',
        message: 'Guidelines for other developers to contribute',
        name: 'contributing',
        default: 'We are working on our guidelines.'
    },
    {
        type: 'input',
        message: 'Please provide test instructions.',
        name: 'test_instructions',
    },
    {
      type: 'input',
      message: 'What is your GitHub user name?',
      name: 'github_name',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email_address',
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





