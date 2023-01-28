const Employee = require("./employee");

class Intern extends Employee  {
    constructor(name, email, id, schoolName){
        super(name, email, id)
        this.schoolName = schoolName
        
    }
    getSchoolName(){
        return this.schoolName;
    }
    getRole(){
        return "Student";
    }
}

//   const intern = new Intern(
//     data.internName,
//     data.internId,
//     data.internEmail,
//     data.internSchool
//   );
module.exports = Intern; 