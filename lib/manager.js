const Employee = require("./employee");

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber){
        super(employeeName, email, id)
        this.officeNumber= officeNumber
        
    };
    getOfficeNumber(){
        return this.officeNumber;
    };
    getRole(){
        return "Manager";
    };
}

module.exports = Manager; 