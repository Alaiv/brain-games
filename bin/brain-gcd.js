#!/usr/bin/env node
import engine from '../src/index.js';
import getRandomNumber from '../src/randomNumber.js';

const getGcd = (nOne, nTwo) => (nOne % nTwo ? getGcd(nTwo, nOne % nTwo) : `${Math.abs(nTwo)}`);

const gcd = () => {
  const [firstNum, secondNum] = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  console.log(`Question: ${firstNum} ${secondNum}`);
  return getGcd(firstNum, secondNum);
};

engine(() => gcd(), 'Find the greatest common divisor of given numbers.');
