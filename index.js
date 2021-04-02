const fs = require("fs")
const questions = require("./questions.js");
const inquirer = require("inquirer");

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
MIT License
Copyright (c) 2021 ${answers.name}
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
#Github
Please visit my ${answers.github} to visit my work.
#Email
My Email is ${answers.email}. Feel free to reach me here.`;
inquirer
    .prompt(questions)
    .then((data) => {
        const filename = `README.md`;
        fs.writeFile(filename, generateREADME(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
