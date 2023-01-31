const Employee = require("../lib/employee");

test("can create an employee object", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
});

test("can set object properties using employee constructor", () =>{
    const employee = new Employee("Bob", 54, "bob@gmail.com");
    expect(employee.name).toBe("Bob");
    expect(employee.id).toBe(54);
    expect(employee.email).toBe("bob@gmail.com");
});