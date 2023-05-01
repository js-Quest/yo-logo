const { Circle, Triangle, Square } = require('./shapes.js');


const text = 'YES';
const textColor = 'white'
const shapeColor = '#3395FF'

const passRenderCircle = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" stroke-width="5" />`;
const passRenderTriangle = `<polygon points="150, 18 244, 182 56, 182" style="fill:${shapeColor};stroke-width:1" />`
const passRenderSquare = `<rect x="73" y="40" width="160" height="160"style="fill:${shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />`
const passAddText = `<text x="150" y="125" font-size="40" text-anchor="middle"  fill="${textColor}">${text}</text>`;


describe('render Circle', () => {
  it('should generate a string of code for an svg file, for the corresponding Shape tag (ex: <circle/>) with the given attributes matching user input', () => {
    const newShape = new Circle(text, textColor, shapeColor);
    const result = `${newShape.render()}`;
    expect(result).toBe(passRenderCircle)
  })
});
describe('render Triangle', () => {
  it('should generate a string of code for an svg file, for the corresponding Shape tag (ex: <polygon/>) with the given attributes matching user input', () => {
    const newShape = new Triangle(text, textColor, shapeColor);
    const result = `${newShape.render()}`;
    expect(result).toBe(passRenderTriangle)
  })
});
describe('render Square', () => {
  it('should generate a string of code for an svg file, for the corresponding Shape tag (ex: <rect/>) with the given attributes matching user input', () => {
    const newShape = new Square(text, textColor, shapeColor);
    const result = `${newShape.render()}`;
    expect(result).toBe(passRenderSquare)
  })
});
describe('render Shape text', () => {
  it('should generate a string of code for an svg file, for the text portion of the logo specified by user input', () => { 
    const newShape = new Circle(text, textColor, shapeColor);
    const result = `${newShape.addText()}`;
    expect(result).toBe(passAddText)
  })
});

