const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

inquirer
    .prompt([
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
            
    } else if (data.role === "Engineer") {
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
    } else if (data.role === "Intern") {
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
    }
    console.log(data);
    var myHTML = `
    `
    
    
    fs.writeFile("profile.html", myHTML, (err) =>
    err ? console.log(err) : console.log('')
    );

    
});




  
