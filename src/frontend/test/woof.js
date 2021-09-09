/* eslint-disable consistent-return */
const woof = (str) => {
  if (typeof str !== 'string') {
    throw Error('Must be a string');
    // return null;
  }
  return `${str.length}woof`;
};

module.exports = woof;
