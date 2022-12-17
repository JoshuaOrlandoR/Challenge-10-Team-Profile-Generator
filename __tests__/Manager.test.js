const Manager = require('../libraries/Manager');

test('Creates office number property for employee object', ()=> {
    const officeNumber = 1;
    const testEmployee = new Manager ("Josh", 100, "joshmanager@gmail.com", officeNumber);
    expect(testEmployee.officeNumber).toBe(officeNumber);
});

test('Using getOfficeNumber', () =>{
    const officeNumber = 2;
    const testEmployee = new Manager ("Josh", 100, "joshmanager@gmail.com", officeNumber);
    expect(testEmployee.getOfficeNumber()).toBe(officeNumber)
});

