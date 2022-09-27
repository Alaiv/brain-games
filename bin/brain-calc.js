#!/usr/bin/env node
import engine from '../src/index.js';
import getRandomNumber from '../src/randomNumber.js';

const calc = () => {
  const operations = ['*', '+', '-'];
  const randomOperation = getRandomNumber(0, 2);
  const randomNumbers = [getRandomNumber(1, 25), getRandomNumber(3, 10)];
  const operation = operations[randomOperation];

  console.log(`Question: ${randomNumbers[0]} ${operation} ${randomNumbers[1]}`);

  switch (operations[randomOperation]) {
    case '*':
      return `${randomNumbers[0] * randomNumbers[1]}`;
    case '+':
      return `${randomNumbers[0] + randomNumbers[1]}`;
    case '-':
      return `${randomNumbers[0] - randomNumbers[1]}`;
    default:
      return 'Something went wrong';
  }
};

engine(() => calc(), 'What is the result of the expression?');
