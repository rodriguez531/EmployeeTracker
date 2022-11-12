const inquirer = require("inquirer")
const mysql = require("mysql")
const startPrompt = () => {
    inquirer.prompt([
    {
        type: 'list',
        name: 'task',
        message: 'what would you like to do?',
        choices: [
            "view all departments ",
            "view all roles",
            "view all employees",
            "add a department",
            "add a role",
            "add an employee",
            "update an employee role"
            

        ]
    
    }
    ]) .then((responses) => {
        console.log(responses)
    }) .catch((err) => {
        throw err
    })
}

function viewDeparments(){

}



startPrompt()