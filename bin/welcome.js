import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default getUserName;
