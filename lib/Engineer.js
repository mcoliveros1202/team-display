const Employee = require('./Employee');

// Engineer class, includes Employee class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github
    }
    // gets Engineer role
    getRole() {
        return 'Engineer'
    }
    // gets Engineer's github username
    getGithub() {
        return this.github
    }
}

module.exports = Engineer;