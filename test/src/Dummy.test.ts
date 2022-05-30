import { getPrimeFactorsOf } from '../../src/Dummy'

describe("Prime factors of 2", () => {
    it("should return 2", () => {
        const output = getPrimeFactorsOf(2)
        expect(output).toEqual([2])
    })
})

describe("Prime factors of 3", () => {
    it("should return 3", () => {
        const output = getPrimeFactorsOf(3)
        expect(output).toEqual([3])
    })
})