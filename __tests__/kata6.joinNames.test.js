const { joinNames } = require('../src');

describe('joinNames', () => {
  it('returns string of names, seperated by commas and an ampersand', () => {
    expect(joinNames(names)).toBe(Bart, Lisa & Maggie)
  });
});
