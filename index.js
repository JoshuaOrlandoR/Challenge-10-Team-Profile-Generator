// Requirements
//Positions
const Manager = require('./libraries/Manager');
const Engineer = require('./libraries/Engineer');
const Intern = require('./libraries/Intern')

//Template
const generateHTMLPage = require('./src/generateHTML');

//Node
const fs = require('fs');
const inquirer = require('inquirer');

//Array for all team info
const employeeTeam = []

//Prompts Section 
//Manager Prompts 
const managerPrompts = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your team manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must provide the name of your team manager.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's employee ID?",
            validate: idInput => {
                if (idInput) { 
                    return true;
                } else {
                    console.log("You must provide your manager's employee ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email adress?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You must provide your manager's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You must provide your manager's office number.");
                    return false;
                }
            }
        }
    ])
    .then(managerResponses => {
        const {name, id, email, officeNumber} = managerResponses;
        const manager = new Manager (name, id, email, officeNumber);

        employeeTeam.push(manager);
        console.log('Your manager information: ')
        console.log(manager);
    })
};

// Adding Engineers and Interns 

const employeePrompts = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'position',
            message: 'Select if your team member is an engineer or an intern.',
            choices: [
                'Engineer',
                'Intern'
            ]
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You must provide your employee's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team member's employee ID?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("You must provide the employee's ID.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your team member's email adress?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ("You must provide your employee's email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Provide your engineer's github username.",
            when: (input) => input.position === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("You must provide the engineer's github username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Provide your intern's school.",
            when: (input) => input.position === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("You must provide the intern's school.");
                    return false;
                }
            }
        },
        { 
            type: 'confirm',
            name: 'employeeAddition',
            message: 'Are there more employees you would like to add to the team?',
            default: false
        }
    ])
    .then(employeeResponses => {
        let {name, id, email, position, github, school, employeeAddition} = employeeResponses;
        let employee;

        if (position ==="Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log('Your engineer information: ');
            console.log(employee);

        } else if (position === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log('Your intern information: ');
            console.log(employee);
        }

        employeeTeam.push(employee);

        if (employeeAddition) {
            return employeePrompts(employeeTeam);
        } else {
            return employeeTeam;
        }
    })
};


//Creating HTML
const writetoFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) { 
            throw err
        } else {
            console.log('Your team profile page has successfully been created. Navigate to the dist folder to take a look!')
        }
    })
};

managerPrompts()
.then(employeePrompts)
.then(employeeTeam => {
    return generateHTMLPage(employeeTeam);
})
.then(teamHTML => {
    return writetoFile(teamHTML);
})
.catch(err => {
    console.log(err);
});

