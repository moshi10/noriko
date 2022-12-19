import { sum } from './sum'

describe(`${sum.name}`, () => {
    it('ok', () => {
        const prices = [100, 200, 300]
        const expected = 600
        const actual = sum(prices)
        expect(actual).toBe(expected)
    });

    it('ng', () => {
        const prices: number[] = []
        const expected = 100
        const actual = sum(prices)
        expect(actual).not.toBe(expected)
    });
});
