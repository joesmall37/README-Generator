const fs = require("fs")
const questions = require("./questions.js");
const inquirer = require("inquirer");
const licenseText = require("./license.js")

// const generateMarkdown = require(‘./utils/generateMarkdown’);

const generateREADME = (answers) =>
`# Table of Contents:
* [Title](#Title)
* [Description](#Description)
* [TableofContents](#TableofContents)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)
* [License](#License)
* [Github](#Github)
* [Email](#Email)
# Title:
# ${answers.title} README
## Description:
${answers.description}
#Usage
${answers.usage}
#Contribution Guidelines
${answers.contribution}
#Tests
Some of the tests that I ran for this project are: ${answers.tests}.
#License
${answers.license}
#Github
Please visit my ${answers.github} to visit my work.
#Email
My Email is ${answers.email}. Feel free to reach me here.`;
inquirer
    .prompt(questions)
    .then((data) => {
      switch (data.license) {
        case 'MIT':
          data.license = licenseText.mit;
          break;
        case 'Unlicense':
          data.license = licenseText.unlicense;
          break;
        case 'Boost':
          data.license = licenseText.boost;
        case 'Mozilla':
          data.license = licenseText.mozilla;
          break;
      }
        const filename = `README.md`;
        fs.writeFile(filename, generateREADME(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
