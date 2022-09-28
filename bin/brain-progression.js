#!/usr/bin/env node
import engine from '../src/index.js';
import getRandomNumber from '../src/randomNumber.js';

const getProgression = () => {
  const start = getRandomNumber(1, 40);
  const [range, steps] = [getRandomNumber(5, 10), getRandomNumber(1, 3)];
  const finish = start + range * steps;
  const progression = [];

  for (let i = start; i < finish; i += steps) {
    progression.push(i);
  }

  const answerIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[answerIndex];
  progression[answerIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);

  return `${correctAnswer}`;
};

engine(() => getProgression(), 'What number is missing in the progression?');
