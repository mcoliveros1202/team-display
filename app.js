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

// prompt manager-specific questions
function startQuestions() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'nameManager',
                message: "Provide manager's name."
            }
            // {
            //     type: 'number',
            //     name: 'idManager',
            //     message: "Provide manager's ID number."
            // },
            // {
            //     type: 'input',
            //     name: 'emailManager',
            //     message: "Provide the manager's email address."
            // },
            // {
            //     type: 'input',
            //     name: 'office',
            //     message: "Provide the manager's office number."
            // }

            // put answers into manager constant and push manager into idArray, then call createTeam()
        ])
        .then((answers) => {
            // const manager = new Manager(
            //     answers.nameManager,
            //     answers.idManager,
            //     answers.emailManager,
            //     answers.office
            // )
            // teamInfo.push(manager)
            //     idArray.push(answers.idManager)
            //     createTeam()
            console.log(answers);
        })
        .catch((err) => {
            if(err) {
                throw err
            }
        })
}

// prompt to add another team member or to finish build
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

// ask generalInfo questions and engineer-specific question
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
        // then create new constant for engineer and put answers into idArray
        .then(answers => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            )
            teamInfo.push(engineer)
                idArray.push(answers.id)
                createTeam()
        })
}

// ask generalInfo questions and intern-specific question
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

        // then put answers into new intern constant and push the constant into idArray
        .then(answers => {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            )
            teamInfo.push(intern)
                idArray.push(answers.id)
                createTeam()
        })
}


function buildTeam(){
    // write the index.html file by joining the path segments and creating a string and the current directory
    return fs.writeFileSync(path.join(process.cwd(), 'index.html'), render(teamInfo), 'utf-8')
}

// initialize the program
startQuestions();

// function call to initialize program

module.exports = Program;