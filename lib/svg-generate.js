const {Circle, Triangle, Square} = require('./shapes')

function generateLogo(answers) {    // switch case for value of shape? for which shape to generate in fs.writeFile
  switch (answers) {
    case 'circle':
      return new Circle;
    case 'triangle':
      return new Triangle;
    case 'square':
      return new Square;
  };
}


module.exports = generateLogo;