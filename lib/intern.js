const Employee = require("./employee");

class Intern extends Employee  {
    constructor(schoolName){
        super(name, email, id, "Student")
        this.schoolName = schoolName
        
    }
}

module.export = Intern; 