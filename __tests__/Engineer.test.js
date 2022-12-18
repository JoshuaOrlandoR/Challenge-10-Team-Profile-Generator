const Engineer = require('../libraries/Engineer');

test('Create github property', () => {
    const github = "JoshuaGitHub";
    const testEmployee = new Engineer("Josh", 100, "joshmanager@gmail.com",github);
    expect(testEmployee.github).toBe(github);
});

test('Using getGithub', () => {
    const github = "JoshuaGithub";
    const testEmployee = new Engineer("Josh", 100, "joshmanager@gmail.com",github);
    expect(testEmployee.getGithub()).toBe(github);
});

test('Using getRole', () => {
    const roleTest = "Engineer"
    const testEmployee = new Engineer ("Josh", 100, "joshmanager@gmail.com","JoshuaGithub");
    expect(testEmployee.getRole()).toBe(roleTest);
});