const fs = require("fs")
const questions = require("./questions.js");
const inquirer = require("inquirer");
const licenseText = require("./license.js");
const badges = require("./badges.js");
let badge;

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
  - ${answers.description}
## Usage
- ${answers.usage}
## Contribution Guidelines
- ${answers.contribution}
## Tests
-  ${answers.tests}.
## License
- ${answers.license}

## Questions
- Please visit my ${answers.github} see more of my work.
  - Please reach out to me with any furthers questions at ${answers.email}`;
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
        case 'Apache':
          data.license = licenseText.apache;
          break;
        case 'GNU':
          data.license = licenseText.gnu;
          break;
        case 'Eclipse':
          data.license = licenseText.eclipse;
          break;
      }
        const filename = `README.md`;
        fs.writeFile(filename, generateREADME(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
