import readlineSync from 'readline-sync';

const getUserName = (message) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(message);
  return name;
};

export default getUserName;
