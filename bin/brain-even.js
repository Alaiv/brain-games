#!/usr/bin/env node
import engine from '../src/index.js';
import getRandomNumber from '../src/randomNumber.js';

const isEven = () => {
  const randomNumber = getRandomNumber(0, 150);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  return correctAnswer;
};

engine(
  () => isEven(),
  'Answer "yes" if the number is even, otherwise answer "no".',
);
