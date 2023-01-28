function startApp(){
    function createTeam() {
    inquirer.prompt([
            {
                type: 'list',
                message: 'Please choose employee role: ',
                name: 'role',
                choices: ["Manager", "Engineer", "Intern", "Finished"]
            }]).then(function(data){
              switch(data.role){
                case "Manager":
                addManger();
                break;
                case "Engineer":
                addEngineer();
                break;
                case "Intern":
                addIntern();
                break;
                default:
                  myHTML();
              }
      })
    }
    function addManger(){
    // .then((data) => {
        // if (data.role === "Manager") {
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
                ]).then(answers => {
                  const manager= new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
                  teamArray.push(manager);
                  createTeam();
                });
              }
        // } else if (data.role === "Engineer") {
            function addEngineer() {
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
                ]).then(answers => {
                    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                    teamArray.push(engineer);
                    createTeam();
                });
            }
        // } else if (data.role === "Intern") {
        function addIntern() {
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
                ]).then(answers => {
                    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                    teamArray.push(intern);
                    createTeam();
                });
        }
        // console.log(data);
        // var myHTML = `
        // `
        
        function myHTML (){
        fs.writeFileSync("profile.html", generateTemplate(teamArray)
        // , (err) =>
        // err ? console.log(err) : console.log('')
        );
      }
    createTeam();
    }
    startApp();