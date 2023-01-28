const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber){
        super(name, email, id)
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
module.export = Manager; 