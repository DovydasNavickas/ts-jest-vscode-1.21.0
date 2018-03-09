import { sum } from "../src";

describe(`Test sum`, () => {
    it(`1 + 2 should return 3`, () => {
        expect(sum(1, 2)).toBe(3)
    })
})