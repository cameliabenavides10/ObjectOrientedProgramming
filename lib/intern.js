const Employee = require("./employee");

class Intern extends Employee  {
    constructor(employeeName, id, email, schoolName){
        super(employeeName, email, id)
        this.schoolName = schoolName
        
    }
    getSchoolName(){
        return this.schoolName;
    }
    getRole(){
        return "Intern";
    }
}

//   const intern = new Intern(
//     data.internName,
//     data.internId,
//     data.internEmail,
//     data.internSchool
//   );
module.exports = Intern; 