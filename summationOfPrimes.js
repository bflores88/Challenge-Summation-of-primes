module.exports = function(limit) {
  // do work here
  let sum = 0;

  function checkPrime(num) {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < limit; i++) {
    if (checkPrime(i)) {
      sum += i;
    }
  }

  return sum;
};
