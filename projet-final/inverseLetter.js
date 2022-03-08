const inverseLetter = str =>
  str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');

module.exports = inverseLetter;