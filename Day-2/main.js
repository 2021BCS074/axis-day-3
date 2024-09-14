function isPrime(n){
    for(let i=2;i <= Math.sqrt(n); i++){
        if(n%i==0)
            return false
    }
    return true
}
n=prompt("Enter a number")

if(isPrime(n))
    console.log("Prime");
else
   console.log("Not Prime"); 