// defines Employee class, which will be used by all other objects
class Employee {
    // team info
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // gets Employee Name
    getName() {
        return this.name
    };
// gets Employee Id
    getId() {
        return this.id
    };
// gets Employee email
    getEmail() {
        return this.email
    };

};

module.exports = Employee;