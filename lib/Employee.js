class Employee {
    // team info
    constructor(name = '', id = '', email = '', job = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.job = job
    }
    getName() {
        return { 
            name: `${this.name}`
        }
    };

    getId() {
        return { 
            id: `${this.id}`
        }
    };

    getEmail() {
        return {
            email: `${this.email}`
        }
    };

    getRole = function() {
        return {
            role: `${this.job}`
        };
    };
};

module.exports = Employee;