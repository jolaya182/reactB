/* global test, expect  */
const woof = require('./woof');

test.todo('do this later');
test.skip('want to skip this test', () => {
  expect(1).toBe(1);
});

test('woof should return number of woofs', () => {
  const result = woof('oh herro');
  expect(result).toBe('8woof');
  expect(result).not.toBe('8swoof');
  const ob = { a: 'one', b: '2', c: 'three' };
  expect(ob).toEqual({
    a: 'one',
    b: '2',
    c: 'three'
  });
  expect(result).toMatch(/\dwoof/i);
  const ab = ['a', 'b', 'c'];
  expect(ab).toContain('b');
});

test('should return null when not given a string', () => {
  //   const result = woof();
  //   expect(result).toBeNull();
  expect(() => woof()).toThrow('Must be a string');
});

// test.only('should should only test per file', () => {
//   expect(() => woof()).toThrow('Must be a string');
// });
