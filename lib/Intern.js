const Employee = require('./Employee');

// Intern class
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email)
        this.school = school
    }
// gets Intern role
    getRole() {
        return 'Intern'
    }
    // gets Intern school
    getSchool() {
        return this.school
    }
}

module.exports = Intern;