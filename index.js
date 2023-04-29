const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/svg-generate')

inquirer.prompt([
  {
    type: 'input',
    message: 'Please type up to three letters to be present as text in your logo',
    name: 'text',
  },
  {
    type: 'input',
    message: 'Type a color keyword (or the hexadecimal number) to choose your TEXT color',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'What shape would you like your logo to be?',
    name: 'shape',
    choices: ['circle', 'triangle', 'square'],
    // filter(value) {
    //   return value;
    // }
  },
  {
    type: 'input',
    message: 'Type a color keyword (or the hexadecimal number) to choose your SHAPE color',
    name: 'shapeColor',
  }
])
  .then((answers) => {
    console.log(answers);


    fs.writeFile('./examples/logo.svg', generateLogo(answers), (err) =>
      err ? console.error(err) : console.log('success - generated logo.svg!')
    );

  });