import { getPrimeFactorsOf } from '../../src/Dummy'

describe("Test for getPrimeFactorsOf method", () => {
    it("getPrimeFactorsOf 2 should return 2", () => {
        const output = getPrimeFactorsOf(2)
        expect(output).toEqual([2])
    })

    it("getPrimeFactorsOf 3 should return 3", () => {
            const output = getPrimeFactorsOf(3)
            expect(output).toEqual([3])
    })

    it("getPrimeFactorsOf 4 should return [2,2]", () => {
            const output = getPrimeFactorsOf(4)
            expect(output).toEqual([2,2])
    })

    it("getPrimeFactorsOf 5 should return [5]", () => {
            const output = getPrimeFactorsOf(5)
            expect(output).toEqual([5])
    })

    it("getPrimeFactorsOf 6 should return [2,3]", () => {
                const output = getPrimeFactorsOf(6)
                expect(output).toEqual([2,3])
    })

    it("getPrimeFactorsOf 7 should return [7]", () => {
                    const output = getPrimeFactorsOf(7)
                    expect(output).toEqual([7])
    })

    it("getPrimeFactorsOf 8 should return [2,2,2]", () => {
                        const output = getPrimeFactorsOf(8)
                        expect(output).toEqual([2,2,2])
    })

})
