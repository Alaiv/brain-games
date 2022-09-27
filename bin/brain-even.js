#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from './welcome.js';

const name = getUserName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const winCondition = 3;
let answersCount = 0;
let userCorrect = true;

const isEven = () => {
  const randomNumber = Math.round(Math.random() * 100);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(
      `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
    );
    console.log(`Let's try again, ${name}!`);
  }
  return answer === correctAnswer;
};

while (userCorrect && answersCount <= winCondition) {
  if (answersCount === 3) {
    console.log(`Congratulations, ${name}`);
  } else {
    userCorrect = isEven();
  }
  answersCount += 1;
}
