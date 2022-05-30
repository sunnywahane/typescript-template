export const getPrimeFactorsOf = (input: number) => {
    var  factors = [];
     if(input%2 == 0) {
        factors.push(2)
        input = input/2
     }
     if(input!=1)
     factors.push(input)
     return factors
}
