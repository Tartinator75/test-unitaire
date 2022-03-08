const chunkArray = require('./chunk');

test('la fonction chunkArray existe', () => {
  expect(chunkArray).toBeDefined();
});

test('Créer 4 tableau de 5 éléments dans un tableau à partir d\'un tableau de 20 éléments', () => {
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const maxLength = 5;
  const chunkedArray = chunkArray(numbers, maxLength);

  expect(chunkedArray).toEqual([[1, 2,3,4,5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]);
});

test('Créer 3 tableau de 3 éléments dans un tableau à partir d\'un tableau de 9 éléments', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const maxLength = 3;
  const chunkedArray = chunkArray(numbers, maxLength);

  expect(chunkedArray).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
});
