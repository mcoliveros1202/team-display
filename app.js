const fs = require('fs');
const inquirer = require('inquirer');
const render = require('./src/html-template.js')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const path = require('path');

const generalInfo = [

    {
        type: 'input',
        name: 'name',
        message: "Provide employee name."
    },
    {
        type: 'number',
        name: 'id',
        message: "Provide employee ID number."
    },
    {
        type: 'input',
        name: 'email',
        message: "Provide the employee email address."
    }
];

let teamInfo = [];
const idArray = [];

// prompt generalInfo questions and manager-specific question
function startQuestions() {
    inquirer
        .prompt([
            ...generalInfo,
            {
                type: 'input',
                name: 'office',
                message: "Provide the manager's office number."
            }
        ]).then(answers => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.office
            )
            teamInfo.push(manager)
                idArray.push(answers.id)
                createTeam()
        })
}
function createTeam(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'confirmNew',
            message: 'Would you like to add another team member?',
            choices: ['Engineer', 'Intern', 'No more!']
        }
    ])
    .then(answer => {
        switch (answer.confirmNew){
            case 'Engineer':
                addEngineer()
                break
            case 'Intern':
                addIntern()
                break
            default:
                buildTeam()
        }
    })
}
function addEngineer(){
    inquirer
        .prompt([
            ...generalInfo,
            {
                type: 'input',
                name: 'github',
                message: "Provide the engineer's GitHub username."
            }
        ])
        .then(answers => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.office
            )
            teamInfo.push(engineer)
                idArray.push(answers.id)
                createTeam()
        })
}

function addIntern(){
    inquirer
        .prompt([
            ...generalInfo,
            {
                type: 'input',
                name: 'school',
                message: "Provide the intern's school name."
            }
        ])
        .then(answers => {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.office
            )
            teamInfo.push(intern)
                idArray.push(answers.id)
                createTeam()
        })
}

function buildTeam(){
    return fs.writeFileSync(path.join(process.cwd(), 'index.html'), render(teamInfo), 'utf-8')
}

startQuestions();



// // // initialize the program

// // function call to initialize program

module.exports = Program;