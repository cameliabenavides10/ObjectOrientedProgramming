const Employee = require("./employee");

class Manager extends Employee {
    constructor(office){
        super(name, email, id, "Manager")
        this.office= office
        
        
    }
}

module.export = Manager; 