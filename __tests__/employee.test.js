const Employee = require("../lib/employee");

test("can create an employee object", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
});

test("can set object properties using employee constructor", () => {
    const employee = new Employee("Bob", "bob@gmail.com", 54);
    expect(employee.name).toBe("Bob");
    expect(employee.email).toBe("bob@gmail.com");
    expect(employee.id).toBe(54);
});

test("can return employee name", () => {
    const newEmployee = new Employee("Abby");
    expect(newEmployee.getName()).toBe("Abby");

});

test("can return employee email", () => {
    const newEmployee = new Employee("_", "abby@gmail.com");
    expect(newEmployee.getEmail()).toBe("abby@gmail.com");

});

test("can return employee id", () => {
    const newEmployee = new Employee("_", "abby@gmail.com", 5);
    expect(newEmployee.getId()).toBe(5);

});

test("can return employee role", ()=>{
    const newEmployee = new Employee ("Abby", "abby@gmail.com", 5);
     expect(newEmployee.getName()).toBe("Employee");
    
    });