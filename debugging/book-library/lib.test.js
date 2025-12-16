const { Book, validateTitle, validatePages } = require('./lib.cjs');

test('Book class stores values and toggles read', () => {
  const b = new Book('T', 'A', 100, false);
  expect(b.title).toBe('T');
  expect(b.author).toBe('A');
  expect(b.pages).toBe(100);
  expect(b.check).toBe(false);
  b.toggleRead();
  expect(b.check).toBe(true);
});

test('validateTitle rejects empty/whitespace', () => {
  expect(validateTitle('')).toBe(false);
  expect(validateTitle('   ')).toBe(false);
  expect(validateTitle('Name')).toBe(true);
});

test('validatePages accepts positive numbers', () => {
  expect(validatePages('12')).toBe(true);
  expect(validatePages(0)).toBe(false);
  expect(validatePages(-5)).toBe(false);
  expect(validatePages('abc')).toBe(false);
});
