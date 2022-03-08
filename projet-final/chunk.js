const chunkArray = (array, maxLength) => {
    const chunkedArray = [];
    array.forEach(value => {
      const last = chunkedArray[chunkedArray.length - 1];
  
      if (!last || last.length === maxLength) {
        chunkedArray.push([value]);
      } else {
        last.push(value);
      }
    });
  
    return chunkedArray;
  };
  
  module.exports = chunkArray;
  