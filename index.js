import inquirer from "inquirer";
import { quiz } from "./app.js";

const {playerName} = await inquirer.prompt({
  type: "input",
  name: "playerName",
  message: "What's your name?",
  default: "Player1",
});

console.log(`Hello, ${playerName}Lets begin the quiz!`);

let score = 0;

for (let i = 0; i < quiz.length; i++) {
  const { question, answer, choices } = quiz[i];

  const { userAnswer } = await inquirer.prompt({
    type: "list",
    name: "userAnswer",
    message: "question",
    choices,
  });

  if (userAnswer === answer) {
    console.log("Nice work!");
    score++;
  } else {
    console.log("Wrong! , The correct answer is" + answer);
  }
}
console.log("You scored".score);
