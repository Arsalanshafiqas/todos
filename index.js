import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoquestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in your todos?"
        },
        {
            name: 'secondQuestion',
            type: "confirm",
            message: "would you like to add more in your todos?",
            default: "true"
        }
    ]);
    todos.push(todoquestions.firstQuestion);
    console.log(todos);
    condition = todoquestions.secondQuestion;
}
