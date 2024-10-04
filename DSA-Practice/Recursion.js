//<------------------------------------RECURSION-1-------------------------------------------->

//<-----Sum of N numbers---------->
console.log('----------------------------------------------');

function sum(N) {
    if(N==1) return 1;

    return sum(N-1) + N;
}

console.log(sum(5));


//<------Factorial of N numbers------->

console.log('----------------------------------------------');

function fact(N){
    if(N==0) return 1;

    return N * fact(N-1);
}

console.log(fact(5));


//<------Fibonacci------>
console.log('----------------------------------------------');

function fib(N){
    if(N <= 1) return N;

    return fib(N-1) + fib(N-2);
}

console.log(fib(10));


//<------print numbers from 1 to N--------->
console.log('----------------------------------------------');

function printNum(N){
    if(N==1){
        console.log(1);
        return;
    }

    printNum(N-1);

    console.log(N);
}

printNum(10);

//<---------Palindrome-------->
console.log('----------------------------------------------');

function isPal(str, i, j){
    if(i >= j) return true;

    if(str[i] != str[j]) return false;

    return isPal(str, i+1, j-1);
}

let str = 'MALAYALAM'
let n = str.length;

console.log(isPal(str, 0, n-1));