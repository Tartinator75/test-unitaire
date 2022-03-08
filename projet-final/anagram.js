const isAnagram = (string1, string2) => {
    return isString(string1) === isString(string2);
  }
  
  
   const isString = (string) =>  {
    return string.replace(/[^\w]/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
  
  module.exports = isAnagram;
  