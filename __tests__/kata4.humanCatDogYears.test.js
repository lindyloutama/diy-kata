const { humanCatDogYears } = require('../src');

<<<<<<< HEAD
describe('humanCatDogYears', () => {
  it('returns array of human, cat and dog years when passed human years', () => {
    expect(humanCatDogYears(10)).toEqual( [10, 56, 64] )
  });
});
// Look Ma, no handlebars!!!
=======
describe ('humanCatDogYears', () => {
    it('returns human years for cats and dogs', () => {
        expect(humanCatDogYears(23)).toEqual([23, 108,129])
        expect(humanCatDogYears(1)).toEqual([1, 15,15])
    })
}
)
>>>>>>> a435d311b0d8854cdbebb0f511a967a6b6797075
