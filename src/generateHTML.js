

function createTeam(theTeam){


function createManager(newManager){
return  `<div class="card employee-card">
<div class="card-header bg-primary text-white">
    <h2 class="card-title" id="change-manager">${newManager.getName()}</h2>
    <h3 class="card-title" id="manager-role"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item" id="manager-id">${newManager.getId()}</li>
        <li class="list-group-item" id="manager-email">Email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
        <li class="list-group-item" id="manager-office">${newManager.getOfficeNumber()}</li>
    </ul>
</div>
</div>`
}

function createEngineer (newEngineer){
    return  `<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${newEngineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Engineer</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">${newEngineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub username: ${newEngineer.getGithub()}</li>
        </ul>
    </div>
</div>`
}

function createIntern(newIntern){
    return  `<div class="card employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${newIntern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">${newIntern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
            <li class="list-group-item">School: ${newIntern.getSchoolName()}</li>
        </ul>
    </div>
</div>`
}
let HTML =[]
HTML.push(theTeam.filter(employee => employee.getRole()==="Manager")
.map(manager => createManager(manager)))
HTML.push(theTeam.filter(employee => employee.getRole()==="Engineer")
.map(engineer => createEngineer(engineer)))
HTML.push(theTeam.filter(employee => employee.getRole()==="Intern")
.map(intern => createIntern(intern)))

return HTML.join("");
}    

function generateHTML(theTeam){
    return `<!DOCTYPE html>
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
        <div class="container">
        <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                ${createTeam(theTeam)}
                </div>
        </div>

        </div>`
    }
    
module.exports = generateHTML;