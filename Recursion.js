function factorial(n){
    if (n===1) return 1
    return n*factorial(n-1)
}

function finobacci(n){
    if(n<=1) return n
    return finobacci(n-1) +finobacci(n-2)
}