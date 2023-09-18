function isPrime(arr,a) {
    if(arr <= 1){
        return true
    }
    if(arr/a <= 0){
        return true
    }else{
        return arr/a
    }

}
console.log(isPrime(20,2))