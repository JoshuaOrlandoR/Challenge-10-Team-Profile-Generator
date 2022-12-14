// Import Employee Constructor 
const Employee = require('./Employee');

// Constructor for engineer, extends employee constructor
class Engineer extends Employee {
    constructor (name, id, emial, github) {
        super (name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer