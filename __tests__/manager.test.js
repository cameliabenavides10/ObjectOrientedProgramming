const Intern = require("../lib/Manager");


test('We are going to be testing the object using the constructor', () => {
    const newEmployee = new Manager("Abby", 5, "abby@gmail.com", "123-456-7890")
    expect(newEmployee.officeNumber).toBe("123-456-7890");
});

test('We are testing getofficeNumber()', () => {
    const newEmployee = new Manager("_", 5, "_", "123-456-7890")
    expect(newEmployee.getOfficeNumber()).toBe("123-456-7890");
});

test('We are testing getRole()', () => {
    const newEmployee = new Manager("Abby", 5, "abby@gmail.com")
    expect(newEmployee.getRole()).toBe("Manager");
}); 