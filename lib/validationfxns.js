function isValidHexCode(str) {
  // Regex to check valid
  // hexadecimalColor_code 
  let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);

  // if str
  // is empty return false
  if (str == null) {
    throw new Error ('please enter a CSS color keyword or hexadecimal code')
  }

  // Return true if the str
  // matched the ReGex
  if (regex.test(str) == true) {
    return "true";
  }
  else {
    throw new Error('please enter a CSS color keyword or hexadecimal code')
  }
}


module.exports = {isValidHexCode, };