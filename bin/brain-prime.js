#!/usr/bin/env node
import engine from '../src/index.js';
import getRandomNumber from '../src/randomNumber.js';

const checkForPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getPrime = () => {
  const number = getRandomNumber(1, 200);
  console.log(`Question: ${number}`);

  return checkForPrime(number) ? 'yes' : 'no';
};

engine(() => getPrime(), 'Answer "yes" if given number is prime. Otherwise answer "no".');
