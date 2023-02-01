const Intern = require("../lib/intern");

test('We are going to be testing the object using the constructor', () => {
    const newEmployee = new Intern("Abby", 5, "abby@gmail.com", "UTA")
    expect(newEmployee.school).toBe("UTA");
});

test('We are testing getting getSchool', () => {
    const newEmployee = new Intern("_", 5, "_", "UTA")
    expect(newEmployee.getSchool()).toBe("UTA");
});

test('We are testing getting getRole', () => {
    const employeeCreation = new Intern("Abby", 5, "abby@gmail.com")
    expect(newEmployee.getRolel()).toBe("intern");
});