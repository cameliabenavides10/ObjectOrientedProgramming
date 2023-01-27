const Employee = require("./employee");

class Engineer extends Employee {
    constructor(github){
        super(name, email, id, "Engineer")
        this.github= github
        
        
    }
}

module.export = Engineer; 