const fs = require('fs');

class Shape {
  constructor(text, textColor, shapeColor, shape) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.shape = shape;
  }
  addText() {
    return `<text x="150" y="125" font-size="40" text-anchor="middle"  fill="${this.textColor}">${this.text}</text>`
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor, 'circle');
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke-width="5" />`
  }
}

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor, 'triangle');
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" style="fill:${this.shapeColor};stroke-width:1" />`
  }
}

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor, 'square');
  }
  render() {
    return `<rect x="73" y="40" width="160" height="160"style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />`
  }
}

function renderLogo(shape) {
  let svgString = `<svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      ${shape.addText()}
      </svg>`

  fs.writeFile('./examples/logo.svg', svgString, (err) =>
    err ? console.error(err) : console.log('success - generated logo.svg!'))
}


module.exports = { Circle, Triangle, Square, renderLogo }