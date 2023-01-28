const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, email, id, github){
        super(name, email, id)
        this.github= github
        
    };
    getGithub(){
        return this.github;
    };
    getRole(){
        return "Engineer";
    };
}

//   const engineer = new Engineer(
//     data.engineerName,
//     data.engineerId,
//     data.engineerEmail,
//     data.engineerGithub
//   );
module.export = Engineer; 