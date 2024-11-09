// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'project',
    message: 'What is your project name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What command should be run to install dependencies?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What commands should be run to run tests?',
  },
  {
    type: 'input',
    name: 'repo',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// Function to generate README content
function generateReadMe(answers) {
  return `# ${answers.project}

## Description
${answers.description}

## Installation
To install dependencies, run the following command:
\`\`\`
${answers.install}
\`\`\`

## Tests
To run tests, use the following command:
\`\`\`
${answers.test}
\`\`\`

## Contributing
${answers.repo}

## Questions
If you have any questions, you can reach me at [${answers.email}](mailto:${answers.email}) or find me on GitHub: [${answers.github}](https://github.com/${answers.name}).
  `;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file', err);
    } else {
      console.log('README file has been created successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readMePageContent = generateReadMe(answers);
    writeToFile('READMEtemplate.md', readMePageContent);
  });
}

// Function call to initialize app
init();