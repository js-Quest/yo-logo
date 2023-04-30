const {Circle, Triangle, Square} = require('./shapes')

const generateLogo = (answers) => {    // switch case for which shape to generate in fs.writeFile
  let shape;
  switch (answers.shape) {
    case 'circle':
      newShape = new Circle(answers);
      break;
    case 'triangle':
      newShape = new Triangle(answers);
      break;
    case 'square':
      newShape = new Square(answers);
      break;
      default:
        console.log('error, not a valid shape');
  };
  
}


module.exports = generateLogo;