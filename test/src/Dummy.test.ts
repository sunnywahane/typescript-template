import { getPrimeFactorsOf } from '../../src/Dummy'

describe("Test for getPrimeFactorsOf method", () => {
    it("should return 2", () => {
        const output = getPrimeFactorsOf(2)
        expect(output).toEqual([2])
    })

    it("should return 3", () => {
            const output = getPrimeFactorsOf(3)
            expect(output).toEqual([3])
    })

    it("should return [2,2]", () => {
            const output = getPrimeFactorsOf(4)
            expect(output).toEqual([2,2])
    })
})
