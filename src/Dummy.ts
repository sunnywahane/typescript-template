export const getPrimeFactorsOf = (input: number) => {
    var  factors = [];
     while(input%2 == 0) {
        factors.push(2)
        input = input/2
     }
     if(input%3==0) {
        factors.push(3)
        input = input/3
     }
     if(input!=1)
     factors.push(input)
     return factors
}
