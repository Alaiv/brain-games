#!/usr/bin/env node
import engine from '../src/index.js';
import getRandomNumber from '../src/randomNumber.js';

const calc = () => {
  const operations = ['*', '+', '-'];
  const randomOperation = getRandomNumber(0, 2);
  const [firstNum, secondNum] = [getRandomNumber(1, 25), getRandomNumber(3, 10)];
  const operation = operations[randomOperation];

  console.log(`Question: ${firstNum} ${operation} ${secondNum}`);

  switch (operations[randomOperation]) {
    case '*':
      return `${firstNum * secondNum}`;
    case '+':
      return `${firstNum + secondNum}`;
    case '-':
      return `${firstNum - secondNum}`;
    default:
      return 'Something went wrong';
  }
};

engine(() => calc(), 'What is the result of the expression?');
