const Employee = require('./Employee');

// Manager class

class Manager extends Employee {
    constructor (name, id, email, office) {
        super (name, id, email)
        this.office = office
    }
    // gets Manager role
    getRole() {
        return 'Manager'
    }
    // gets office number
    getOffice() {
        return this.office
    }
}

module.exports = Manager;