
// node package for validating/recognizing color choices, provides function validateColor();
const validateColor = require('validate-color').default;


function validateTextLength(text) {
  if (text.length == 0 || text.length > 3) {
    throw new Error('please enter up to three characters for your logo text') 
}};

function validateTextColor(textColor) {
if (validateColor(textColor) == false && validateColor(textColor) == false) {
  throw new Error('please enter a valid CSS color keyword or hexadecimal code for your TEXT color')
}};

function validateShapeColor(shapeColor){
if (validateColor(shapeColor) == false && validateColor(shapeColor) == false) {
  throw new Error('please enter a valid CSS color keyword or hexadecimal code for your SHAPE color')
}};


module.exports = { validateTextLength, validateShapeColor, validateTextColor }