class Employee{
    constructor(employeeName, email, id){
        this.employeeName = employeeName;
        this.email = email;
        this.id= id;
        
    }
    getName(){
        return this.employeeName;
    };
    getEmail(){
        return this.email;
    };
    getId(){
        return this.id;
    };
    getRole(){
        return"employee";
    };
}

module.exports= Employee