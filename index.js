// Include inquirer.js
const inquirer = require('inquirer');
// Include Node.js built-in File System package
const fs = require('fs');
const requiredQuestion = async (input) => {
  if (input === "") {
     return 'This question is required';
  }
  return true;
};

// Questions for user input

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project_name',
        validate: requiredQuestion,
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'project_description',
        validate: requiredQuestion,
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
        default: 'There are no specific installation instructions.',
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
      name: 'license',
      choices: [
        'Apache',
        'BSD',
        'GNU',
        'ISC',
        'MIT',
        'None',
        'The Unlicense',
      ],
      validate: requiredQuestion,
    },
    {
        type: 'input',
        message: 'Guidelines for other developers to contribute.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please provide test instructions.',
        name: 'test_instructions',
        default: 'No test instructions at this time.',
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
 
  // Answers stores the input from the user in an object
  .then((answers) => {
    
    const readMeContent = `
# ${answers.project_name}

## Description
![license](https://img.shields.io/badge/license-${answers.license}-orange.svg "License Badge")

  ${answers.project_description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
## Installation
  ${answers.installation}

## Usage
  ${answers.usage}

## Credits
  List of Collaborators and/or Attributions:
  ${answers.credits}

## License
  This project is licensed under ${answers.license}

## Contributing
  ${answers.contributing}

## Tests
  How to run tests:
  ${answers.test_instructions}

## Questions
  * Check out my GitHub profile at:
    https://github.com/${answers.github_name}

  * Contact information:
    ${answers.email_address}

  `;

    fs.writeFile('README-demo.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created a README.md!')
    );
  });





