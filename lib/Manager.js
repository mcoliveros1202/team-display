

function Manager(name = '', email = 'email@email.com') {
    this.name = name;

    this.id = Math.floor(100);
    this.email = email;
    this.office = Math.floor(100);
};

module.exports = Manager;