const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const validateColor = require('validate-color').default;



promptQuestions=()=>{
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
      const renderShape = () => {
      const svgString = `<svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      ${shape.addText()}
      </svg>`
     
        if (answers.text.length == 0 || answers.text.length > 3){
        throw new Error('please enter up to three characters for your logo text')
      }else if (validateColor(answers.textColor) == false && validateColor(answers.textColor)==false) {
        throw new Error('please enter a valid CSS color keyword or hexadecimal code for your TEXT color')
      } else if (validateColor(answers.shapeColor) == false && validateColor(answers.shapeColor) == false) {
        throw new Error('please enter a valid CSS color keyword or hexadecimal code for your SHAPE color')
      }else{
        fs.writeFile('./examples/logo.svg', svgString, (err) =>
        err ? console.error(err) : console.log('success - generated logo.svg!'))   
        }
      }
      renderShape(shape);
    })
}
promptQuestions();
