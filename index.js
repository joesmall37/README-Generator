// const fs = require("fs");

// const questions = require("./questions.js");
// const inquirer = require("inquirer");
// const generateHTML = (answers) =>
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//     <title>HTML-generator</title>
// </head>
// <body>
//     <div class="jumbotron">
//         <div class="container">
//             <!-- Name -->
//             <h1>Hi my name is ${answers.name}</h1>
//             <!-- location -->
//             <h3>I am from ${answers.location}</h3>
//             <!-- Bio -->
//             <h3>A little bit about me: ${answers.bio}</h3>
//             <!-- Linkedin url -->
//             <p>My Linkedin is: ${answers.linkedin}</p>
//             <!-- Github username -->
//             <p>My Github is:${answers.github}</p>
//         </div>
//     </div>
// </body>
// </html>`;
// inquirer
//     .prompt(questions)
//     .then((data) => {
//         const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;
//         fs.writeFile(filename, generateHTML(data), (err) =>
//           err ? console.log(err) : console.log('Success!')
//         );
//       });



const fs = require("fs");
const questions = require("./questions.js");
const inquirer = require("inquirer");

// const generateMarkdown = require(‘./utils/generateMarkdown’);

const generateHTML = (answers) =>
`# Table of Contents:
* [Title](#Title)
* [Description](#Description)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [License](#License)
* [Github](#Github)
* [Email](#Email)
# Title:
# ${answers.title}
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
        fs.writeFile(filename, generateHTML(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
