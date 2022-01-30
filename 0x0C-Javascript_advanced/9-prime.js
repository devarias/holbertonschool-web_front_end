function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) count = isPrime(i) ? count + 1 : count;
  return count;
}
function isPrime(num) {
  for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
  return num > 1;
}

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
