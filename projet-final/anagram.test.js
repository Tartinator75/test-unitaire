const isAnagram = require('./anagram');

test('la fonction isAnagram existe', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"armée" est un anagramme de  "marée"', () => {
  expect(isAnagram('armée', 'marée')).toBeTruthy();
});

test('"cancer" est un anagramme de "cancre##"', () => {
  expect(isAnagram('cancer', 'cancre##')).toBeTruthy();
});

test('"chien" n est pas un anagramme de "chat"', () => {
  expect(isAnagram('chien', 'chat')).toBeFalsy();
});
