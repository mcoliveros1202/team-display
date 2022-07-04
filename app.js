const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/html-template');



// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');


const path = require('path');

const managerInfo = () => {
    return inquirer.prompt([

        {
            type: 'input',
            name: 'managerName',
            message: "Provide the manager's name."
        },
        {
            type: 'number',
            name: 'managerId',
            message: "Provide the manager's employee ID."
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "Provide the manager's employee e-mail address."
        },
        {
            type: 'number',
            name: 'office',
            message: "Provide the manager's office number."
        },
    ]);
};


const jobOptions = () => {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);


    const employeeMenu = [
        {
            type: 'list',
            name: 'positionOptions',
            message: 'Select the next position',
            choices: [
                { name: 'Engineer', value: 'engineer'},
                { name: 'Intern', value: 'intern'},
                { name: 'Team Complete', value: 'complete'}
            ]
        }
    ];
    return inquirer.prompt(employeeMenu);
};
const Engineerquestions = (employeeData) => {
    if (!employeeData.employee) {
        employeeData.employee = [];
    }
    for (let count = 0; count < 3; count++) {
       await jobOptions()
            .then(answers => {
                if (answers.employeeMenu === 'engineer') {
                    return new Promise((resolve, reject) => {
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'engineerName',
                                    message: "Provide engineer's name."
                                },
                                {
                                    type: 'number',
                                    name: 'engineerId',
                                    message: "Provide engineer's employee ID number."
                                },
                                {
                                    type: 'input',
                                    name: 'engineerEmail',
                                    message: "Provide engineer's employee email address."
                                },
                                {
                                    type: 'input',
                                    name: 'github',
                                    message: "Provide engineer's GitHub username."
                                }
                            ])
                            .then(answers => {
                                resolve(answers);
                            })
                    })
                } else if (answers.employeeMenu === 'InternQuestions') {
                    return new Promise((resolve, reject) => {
                        inquirer
                            .prompt([
                                {
                                    type: 'input',
                                    name: 'internName',
                                    message: "Provide intern's name."
                                },
                                {
                                    type: 'number',
                                    name: 'internId',
                                    message: "Provide intern's employee ID number."
                                },
                                {
                                    type: 'input',
                                    name: 'internEmail',
                                    message: "Provide intern's employee email address."
                                },
                                {
                                    type: 'input',
                                    name: 'school',
                                    message: "Provide the name of intern's school."
                                }
                            ])
                            .then(answers => {
                                resolve(answers);
                            })
                    });
                } else {
                    console.log('Team member assembly complete!')
                    process.exit(0);
                }
            })
//             // .then(employeeData => {
//             //     jobData.employee.push(employeeData);
//             //     if (employeeData.)
            // })
    }
};

managerInfo()
.then(jobOptions)
.then(questions);
     

//     .then(employeeData => {
//         return generateHTML(employeeData);
//     })
//     .then(programHTML => {
//         return writeFile(programHTML);
//     })
//     .then(writeFileResponse => {
//         console.log(writeFileResponse);
//         return copyFile;
//     })
//     .then(copyFileResponse => {
//         console.log(copyFileResponse);
//     })
//     .catch(err => {
//         console.log(err);
//     });

//     promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
//     return generatePage(portfolioData);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });

 // function to write a file
//  function writeToFile(fileName, data){
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// };

// // initialize the program
// function init() {
//     inquirer.prompt(managerInfo).then((inquirerResponses) => {
//         writeToFile('team.html', generateHTML({ ...inquirerResponses}))
//     })
// };

// // function call to initialize program
// init(); 

// module.exports = Program;