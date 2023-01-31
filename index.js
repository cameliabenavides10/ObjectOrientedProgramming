const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML=require("./src/generateHTML");
let theTeam = [];


function startApp() {
    function intTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: 'Please choose employee role: ',
                    choices: ["Manager", "Engineer", "Intern", "Done"]
                }
            ]).then(function (data) {
                if (data.role === "Manager") {
                    return managerCard()
                } else if (data.role === "Engineer") {
                    return engineerCard()
                } else if (data.role === "Intern") {
                    return internCard()
                }
                else {
                    return makeHTML();
                }
            })
    };
  

    function managerCard() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: 'What is the employee name?',
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'Enter employee ID: ',
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'Enter employee email: ',
                },
                {
                    type: 'input',
                    name: 'managerOffice',
                    message: 'If manager, please enter office number: ',
                }
            ])
            .then((data) => {
                const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
                theTeam.push(manager);
                
                console.log(theTeam)
                console.log(manager.email)
                intTeam();
            });

    }


    function engineerCard() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'engineerName',
                    message: 'What is the employee name?',
                },
                {
                    type: 'input',
                    name: 'engineerId',
                    message: 'Enter employee ID: ',
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: 'Enter employee email: ',
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: 'Please enter github username: ',
                }
            ])
            .then(data => {
                const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
                theTeam.push(engineer);
                console.log(theTeam)
                intTeam();
            })

    }
    function internCard() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: 'What is the employee name?',
                },
                {
                    type: 'input',
                    name: 'internId',
                    message: 'Enter employee ID: ',
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'Enter employee email: ',
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: 'If intern, please enter school name: ',
                }
            ])
            .then((data) => {
                const intern = new Intern(data.internName, data.internEmail, data.internId, data.internSchool);
                theTeam.push(intern);
                intTeam();
            })

    }
    intTeam();

   function makeHTML(){
    fs.writeFileSync("team.html", generateHTML(theTeam))

   }

    }





startApp();



