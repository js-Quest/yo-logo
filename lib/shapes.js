class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text
    this.textColor = textColor
    this.shapeColor = shapeColor
  }
}

class Circle extends Shape {

  renderShape() {
    return `<svg width='300' height='200' xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" stroke-width="5" />
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
          </svg>`

  }

}

class Triangle extends Shape {
  // constructor(text, textColor, shapeColor) {
  //   super(text, textColor, shapeColor);
    return `<svg  width="300" height="200">
  <polygon points="150, 18 244, 182 56, 182" style="fill:${answers.shapeColor};stroke:purple;stroke-width:1" />
  <text x="150" y="145" font-size="50" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`
  }
// }

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
    return `<svg width="300" height="200">
  <rect x="73" y="40" width="160" height="160"style="fill:${answers.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
  <text x="150" y="140" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>`
  }
}






module.exports = { Circle, Triangle, Square }