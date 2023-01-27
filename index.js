const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?',
      },
      {
          type: 'input',
          name: 'job title',
          message: 'Please enter the job title: ',
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
          message: 'If engineer, please enter github username: ',
      },
      {
        type: 'input',
        name: 'office',
        message: 'If manager, please enter office number: ',
      },
      {
          type: 'input',
          name: 'school',
          message: 'If intern, please enter school name: ',
      }
])


.then((data) => {
    console.log(data);
    var myHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> ${data.name} </h1>
        <h1> ${data.location} </h1>
        <h1> ${data.bio} </h1>
        <h1> ${data.linkedin} </h1>
        <h1> ${data.github} </h1>
    </body>
    </html>
    `
    fs.writeFile("profile.html", myHTML, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});