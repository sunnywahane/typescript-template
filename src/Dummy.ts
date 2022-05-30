export const getPrimeFactorsOf = (input: number) => {
    var  factors = [];
     for(var i :number = 2; i<= input; ++i){
        while(input%i ==0){
            factors.push(i)
            input = input/i
        }
     }
     return factors
}
