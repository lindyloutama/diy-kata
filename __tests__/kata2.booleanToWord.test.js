const { booleanToWord } = require('../src');

describe('booleanToWord', () => {
<<<<<<< HEAD
  it('returns Yes when passed true', () => {
    expect(booleanToWord(true)).toBe('Yes')

  });
  it('returns No when passed false', () => {
    expect(booleanToWord(false)).toBe('No')
  });
=======
  it('When booleanToWord is passed true, it should return Yes. When it is passed false, it should return No', () => {
  expect(booleanToWord(false)).toBe('No')
  expect(booleanToWord(true)).toBe('Yes')
  // how do we create specs again???
})
>>>>>>> a435d311b0d8854cdbebb0f511a967a6b6797075
})
