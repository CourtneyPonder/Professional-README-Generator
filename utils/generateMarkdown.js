// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `* [License](#license)`;
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [License](#license)
* [Tests](#tests)
* [Contributing](#contributing)
* [Questions](#questions)

## Installation
${data.installation}


${renderLicenseSection(data.license)}

## Tests
${data.tests}

## Contributing
${data.repo}


## Questions
If you have any questions, please reach out to me at [${data.email}](mailto:${data.email}) or check my GitHub profile at [${data.github}](https://github.com/${data.github}).
`;
}

export default generateMarkdown;

