import readlineSync from 'readline-sync';
import userName from '../bin/welcome.js';

const checkAnswer = (answer, correctAnswer, name) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`,
  );
  console.log(`Let's try again, ${name}!`);
  return false;
};

const engine = (startGame, message) => {
  const name = userName(message);
  const winCondition = 3;
  let correctAnswer = '';

  for (let i = 0; i <= winCondition; i += 1) {
    if (i === winCondition) {
      console.log(`Congratulations, ${name}`);
    } else {
      correctAnswer = startGame();
      const answer = readlineSync.question('Your answer: ');
      if (!checkAnswer(answer, correctAnswer, name)) {
        return false;
      }
    }
  }
  return true;
};

export default engine;
