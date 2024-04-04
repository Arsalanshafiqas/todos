import inquirer from "inquirer"

let todos = []; // shopper[]
let condition = true;

while (condition) {
  let todoquestions = await inquirer.prompt([
    {
      name: "firstQuestion",
      type: "input",
      message: "what would you like to add in your todos?",
    },
    {
      name: "secondQuestion",
      type: "confirm",// when type is confirm answer is in yes or no
      message: "would you like to add more in your todos?",
      default: "true",
    },
  ]);
  todos.push(todoquestions.firstQuestion);
  console.log(todos);
//the loop is running on the based of this variable condition
  condition = todoquestions.secondQuestion;
}
// read, update, delete, add. 