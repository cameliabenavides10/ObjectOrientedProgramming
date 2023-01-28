const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
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
            })
    };
    // else{create HTML}

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

    function makeHTML() {
        fs.writeFileSync("profile.html", generateTemplate(theTeam), (err) =>
            err ? console.log(err) : console.log('')
        )
    };

    function generateTemplate() {
        // var managerNameGrab = document.getElementById("#change-manager");
        // var managerRole = documenet.getElementById("#manager-role");
        // var managerIdGrab = document.getElementById("#manager-id");
        // var managerEmailGrab = documenet.getElementById("#manager-email");
        // var managerofficeGrab = documenet.getElementById("#manager-office");

        // managerNameGrab.innerHTML = Manager.employeeName;
        // managerRole.innerHTML = Manager.getRole;
        // managerIdGrab = Manager.id;
        // managerEmailGrab = Manager.email;
        // managerofficeGrab = Manager.getOfficeNumber;
        


        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                        <h1 class="text-center text-white">My Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="row team-area col-12 d-flex justify-content-center">`


        if (data.role === "Manager") {
            `<div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title" id="change-manager">Less Nessman</h2>
                <h3 class="card-title" id="manager-role"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item" id="manager-id">ID: 86525</li>
                    <li class="list-group-item" id="manager-email">Email: <a href="mailto:bigboss@gmail.com">bigboss@gmail.com</a></li>
                    <li class="list-group-item" id="manager-office">Office number: 512-459-2222</li>
                </ul>
            </div>
        </div>`
        } else if (data.role === "Engineer") {
            `<div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">Tits Maghee</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: 8008</li>
                    <li class="list-group-item">Email: <a href="mailto:tits@gmail.com">tits@gmail.com</a></li>
                    <li class="list-group-item">School: TCU</li>
                </ul>
            </div>
        </div>`
        } else if (data.role === "Intern") {
            `<div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">Tits Maghee</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 8008</li>
                <li class="list-group-item">Email: <a href="mailto:tits@gmail.com">tits@gmail.com</a></li>
                <li class="list-group-item">School: TCU</li>
            </ul>
        </div>
    </div>`
        }


    }




};
startApp();



