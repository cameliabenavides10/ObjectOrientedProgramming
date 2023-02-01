const Employee = require("./employee");

class Engineer extends Employee {
    constructor(employeeName, id, email, github){
        // dont do super 
        super(employeeName, email, id)
        this.github= github
        
    };
    getGithub(){
        return this.github;
    };
    getRole(){
        return "Engineer";
    };
}

//   
module.exports = Engineer; 