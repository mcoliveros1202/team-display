function Intern(name = '', email = 'student@university.com', school = 'School University', job = 'Intern') {
    this.name = name;
    this.email = email;
    this.school = school;
    this.job = job;
    this.id = Math.floor(100);

    this.getRole = function() {
        return {
            role: this.job
        };
    };

    this.getSchool = function() {
        return {
            school: this.school
        };
    };
};

module.exports = Intern;