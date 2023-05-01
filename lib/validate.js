const validateColor = require('validate-color').default;




function validateTextLength() {
  if (answers.text.length == 0 || answers.text.length > 3) {
    throw new Error('please enter up to three characters for your logo text') 
}};

function validateTextColor() {
if (validateColor(answers.textColor) == false && validateColor(answers.textColor) == false) {
  throw new Error('please enter a valid CSS color keyword or hexadecimal code for your TEXT color')
}};

function validateShapeColor(){
if (validateColor(answers.shapeColor) == false && validateColor(answers.shapeColor) == false) {
  throw new Error('please enter a valid CSS color keyword or hexadecimal code for your SHAPE color')
}};


module.exports = { validateTextLength, validateShapeColor, validateTextColor }