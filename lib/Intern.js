function Intern(name = '', email = 'student@university.com', school = 'School University') {
    this.name = name;
    this.email = email;
    this.school = school;

    this.id = Math.floor(100);
};

module.exports = Intern;