const fs = require("fs");

const questions = require("./questions.js");
const inquirer = require("inquirer");
const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>HTML-generator</title>
</head>
<body>
    <div class="jumbotron">
        <div class="container">
            <!-- Name -->
            <h1>Hi my name is ${answers.name}</h1>
            <!-- location -->
            <h3>I am from ${answers.location}</h3>
            <!-- Bio -->
            <h3>A little bit about me: ${answers.bio}</h3>
            <!-- Linkedin url -->
            <p>My Linkedin is: ${answers.linkedin}</p>
            <!-- Github username -->
            <p>My Github is:${answers.github}</p>
        </div>
    </div>
</body>
</html>`;
inquirer
    .prompt(questions)
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.html`;
        fs.writeFile(filename, generateHTML(data), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
