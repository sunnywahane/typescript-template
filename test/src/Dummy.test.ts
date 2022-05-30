import { getPrimeFactorsOf } from '../../src/Dummy'

describe("Prime factors of 2", () => {
    it("should return 2", () => {
        const output = getPrimeFactorsOf(2)
        expect(output).toBe([2])
    })
})