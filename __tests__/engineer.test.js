const Employee = require("../lib/engineer");

test('We are going to be testing the object using the constructor', () => {
    const newEmployee = new Engineer("Abby", 5, "abby@gmail.com", "abby10")
    expect(newEmployee.github).toBe("abby10");
});

test('We are testing getting Github()', () => {
    const newEmployee = new Engineer("_", 5, "_", "abby10")
    expect(newEmployee.getGithub()).toBe("abby10");
});

test('We are testing getting getRole()', () => {
    const newEmployee = new Engineer("Abby", 5, "abby@gmail.com")
    expect(newEmployee.getRole()).toBe("engineer");
});