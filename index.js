const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

inquirer
    .prompt([
        // would you like to add an intern, manager, or intern
        {
            type: 'list',
            name: 'role',
            message: 'Please choose employee role: ',
            choices: ["Manager", "Engineer", "Intern"]
        }
    ])



.then((data) => {
    if (data.role === "Manager") {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the employee name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter employee ID: ',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter employee email: ',
                },
                {
                    type: 'input',
                    name: 'office',
                    message: 'If manager, please enter office number: ',
                }
            ])
    } else if (data.role === "Engineer") {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the employee name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter employee ID: ',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter employee email: ',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'Please enter github username: ',
                }
            ])
    } else if (data.role === "Intern") {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the employee name?',
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Enter employee ID: ',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter employee email: ',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'If intern, please enter school name: ',
                }
            ])
    }
    console.log(data);
    var myHTML = `
    const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
    `
    fs.writeFile("profile.html", myHTML, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
});