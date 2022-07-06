function Manager(name = '', email = 'email@email.com', job = 'Manager') {
    this.name = name;

    this.job = job;
    this.id = Math.floor(100);
    this.email = email;
    this.office = Math.floor(1);

    this.getOffice = function() {
        return {
            Office: this.office
        };
    };
};

module.exports = Manager;