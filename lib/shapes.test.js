const { Circle, Triangle, Square } = require('./shapes.js');
const validateAllAnswers = require('../index.js');

const text = 'YES';
const textColor = 'white'
const shapeColor = '#3395FF'

const passCircle = `<svg width='300' height='200' xmlns="http://www.w3.org/2000/svg"></svg>
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke-width="5" />
<text x="150" y="125" font-size="50" text-anchor="middle" dominant-baseline="central" fill="${textColor}">${text}</text>`

const passTriangle = `<svg width='300' height='200' xmlns="http://www.w3.org/2000/svg"></svg>
<polygon points="150, 18 244, 182 56, 182" style="fill:${this.shapeColor};stroke:purple;stroke-width:1" />
<text x="150" y="125" font-size="50" text-anchor="middle" dominant-baseline="central" fill="${textColor}">${text}</text>`

const passSquare = `<svg width='300' height='200' xmlns="http://www.w3.org/2000/svg"></svg>
<rect x="73" y="40" width="160" height="160"style="fill:${shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
<text x="150" y="125" font-size="50" text-anchor="middle" dominant-baseline="central" fill="${textColor}">${text}</text>`