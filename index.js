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
        default: '',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples for use.',
        name: 'usage',
        default: '',
    },
    {
        type: 'input',
        message: 'Please list your collaborators or third-party assets that require attribution.',
        name: 'credits',
        default: '',
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
        default: '',
    },
    {
        type: 'input',
        message: 'Please provide test instructions.',
        name: 'test_instructions',
        default: '',
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'github_name',
        default: '',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email_address',
        default: '',
    },

  ])
 
  // Answers stores the input from the user in an object
  .then((answers) => {
    
    const readMeContent = `
    # ${answers.project_name}

    ## Description
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
    ${answers.credits}

    
    `;

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });





