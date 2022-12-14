// Import Employee Constructor 
const Employee = require('./Employee');

// Constructor for manager, extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager";
    }
};

module.exports = Manager; 