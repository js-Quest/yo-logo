const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');

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
    let shape;
    switch (answers.shape) {
      case 'circle':
        shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
        break;
      case 'triangle':
        shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
        break;
      case 'square':
        shape = new Square(answers.text, answers.textColor, answers.shapeColor);
        break;
      default:
        console.log('error, not a valid shape');
    };

    const svgString = `<svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${shape.addText()}
    </svg>`


    fs.writeFile('./examples/logo.svg', svgString, (err) =>
      err ? console.error(err) : console.log('success - generated logo.svg!')
    );

  });