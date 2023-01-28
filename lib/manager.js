const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber, employeeName, email, id){
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
// const manager = new Manager(
//     data.managerName,
//     data.managerId,
//     data.managerEmail,
//     data.managerOffice
//   );
module.exports = Manager; 