const inquirer = require('inquirer');
const { Circle, Triangle, Square, renderLogo} = require('./lib/shapes.js');
const { validateTextLength, validateShapeColor, validateTextColor } = require('./lib/validate.js');


// function for questions
promptQuestions = () => {
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
      // switch case for retrieving user input shape to render
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
      }

      // validation functions for input limitations
      validateShapeColor(answers.shapeColor);
      validateTextColor(answers.textColor);
      validateTextLength(answers.text);

      // function to render the logo.svg
      renderLogo(shape);
    
    })
};
promptQuestions();
