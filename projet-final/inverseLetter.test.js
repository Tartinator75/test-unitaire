const inverseLetter = require('./inverseLetter');

test('Cette fonction existe', () => {
  expect(inverseLetter).toBeDefined();
});

test('Letter inverse', () => {
  expect(inverseLetter('letter')).toEqual('rettel');
});

test('Cette fonction avec majuscule', () => {
  expect(inverseLetter('Letter')).toEqual('rettel');
});