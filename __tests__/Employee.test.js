const Employee = require('../libraries/Employee');

test('Creates the new employee', () => {
const testEmployee = new Employee();
expect (typeof(testEmployee)).toBe("object");
});

test('Tests name',() => {
    const name = "Josh";
    const testEmployee = new Employee(name);
    expect(testEmployee.name).toBe(name);
});

test('Tests id', () =>{
    const id = 100;
    const testEmployee = new Employee("Josh", id);
    expect(testEmployee.id).toBe(id);    
});

test('Tests email', () => {
    const email = "joshemployee@gmail.com";
    const testEmployee = new Employee("Josh", 100, email);
    expect(testEmployee.email).toBe(email);
});

test('Using getName', () => {
    const getNameTest = "Joshua"
    const testEmployee = new Employee(getNameTest);
    expect(testEmployee.getName()).toBe(getNameTest);
})

test('Using getId', () => {
    const getIdTest = 101
    const testEmployee = new Employee("Joshua",getIdTest);
    expect(testEmployee.getId()).toBe(getIdTest);
});

test('Using getEmail', () => {
    const getEmailTest = "joshuaget@email.com"
    const testEmployee = new Employee("Joshua",101,);
    expect(testEmployee.getId()).toBe(getEmailTest);
});

test('Using getRole', () => {
    const roleTest = "Employee"
    const testEmployee = new Employee("Joshua", 101, "joshuaget@email.com");
    expect(testEmployee.getRole()).toBe(roleTest);
})
