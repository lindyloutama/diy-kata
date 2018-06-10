const { humanCatDogYears } = require('../src');

describe ('humanCatDogYears', () => {
    it('returns human years for cats and dogs', () => {
        expect(humanCatDogYears(23)).toEqual([23, 108,129])
        expect(humanCatDogYears(1)).toEqual([1, 15,15])
    })
}
)