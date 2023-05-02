const { validateTextLength, validateShapeColor, validateTextColor } = require('./validate.js');

// testing for input validation limitations.
// text must be no longer than 3 letters, must have text.
// colors need to be recognized as keywords or hexadecimal code

const textEmpty = '';
const textTooLong = 'NoNo';
const textColorNotWord = 'notacolor';
const textColorNotHex = '#3395!!';
const shapeColorNotWord = 'notacolor';
const shapeColorNotHex = '#3395!!';

describe('text input', () => {
  it('should throw an error when the text input is empty', () => {
    const cb = () => validateTextLength(textEmpty);
    const err = new Error('please enter up to three characters for your logo text');
    expect(cb).toThrowError(err);
  })
});

describe('text input', () => {
  it('should throw an error when the text input is too many letters', () => {
    const cb = () => validateTextLength(textTooLong);
    const err = new Error('please enter up to three characters for your logo text');
    expect(cb).toThrowError(err);
  })
});

describe('text color input', () => {
  it('should throw an error when the text color input is not a recognized color keyword', () => {
    const cb = () => validateTextColor(textColorNotWord);
    const err = new Error('please enter a valid CSS color keyword or hexadecimal code for your TEXT color');
    expect(cb).toThrowError(err);
  })
});

describe('text color input', () => {
  it('should throw an error when the text color input is not a recognized hexadecimal code', () => {
    const cb = () => validateTextColor(textColorNotHex);
    const err = new Error('please enter a valid CSS color keyword or hexadecimal code for your TEXT color');
    expect(cb).toThrowError(err);
  })
});

describe('shape color input', () => {
  it('should throw an error when the shape color input is not a recognized color keyword', () => {
    const cb = () => validateShapeColor(shapeColorNotWord);
    const err = new Error('please enter a valid CSS color keyword or hexadecimal code for your SHAPE color');
    expect(cb).toThrowError(err);
  })
});

describe('shape color input', () => {
  it('should throw an error when the shape color input is not a recognized hexadecimal code', () => {
    const cb = () => validateShapeColor(shapeColorNotHex);
    const err = new Error('please enter a valid CSS color keyword or hexadecimal code for your SHAPE color');
    expect(cb).toThrowError(err);
  })
});

