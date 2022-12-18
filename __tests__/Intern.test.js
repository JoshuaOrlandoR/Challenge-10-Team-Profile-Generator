const Intern = require('../libraries/Intern');

test('Create school property', () =>{
    const school = "CODING SCHOOL";
    const testEmployee = new Intern("Josh", 4, "joshIntern@gmail.com", school);
    expect(testEmployee.school).toBe(school);
});

test('Using getSchool method', () => {
    const school = "CODING SCHOOL";
    const testEmployee = new Intern("Josh", 4, "joshIntern@gmail.com", school);
    expect(testEmployee.getSchool()).toBe(school);
});

test('Using getRole', () => {
    const roleTest = "Intern"
    const testEmployee = new Intern("Josh", 4, "joshIntern@gmail.com", "CODING SCHOOL");
    expect(testEmployee.getRole()).toBe(roleTest);
});