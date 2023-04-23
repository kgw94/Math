
/*
This algorithm, called the "6n + 1" algorithm, is based on the fact that all primes other than 2 and 3 
can be written in the form 6n + 1 or 6n - 1 for some integer n. By checking for divisibility by numbers 
of this form, the algorithm can quickly eliminate many composite numbers as potential primes.
*/

function isPrime(n) {

    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
}
  
function primeGenerator(number) {
    let primeList = [];
    let i = 2; // Start at 2, since 2 is the first prime number
  
    while (primeList.length < number) {
      if (isPrime(i)) {
        primeList.push(i);
      }
      i++;
    }
  
    return primeList;
}
/*
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
}
*/
 
//console.log(primeGenerator(53)); // Output: [2, 3, 5, 7, 11]
/*
var n = 7;
var primes = primeGenerator(n);
var nth = primes.length;
console.log(primes.indexOf(n) + 1)
console.log(primes[nth-1]);
*/
