const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    // would you like to add an intern, manager, or intern
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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>

</body>
<script src="https://kit.fontawesome.com/c502137733.js"></script>
</html>
    `
    fs.writeFile("profile.html", myHTML, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
});