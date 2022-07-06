function Engineer(name = '', email = 'engineer@email.com', github = 'fakegithub', job = 'Engineer') {
    this.name = name;
    this.email = email;
    this.github = github;
    this.job = job;

    this.id = Math.floor(100);


    this.getGithub = function() {
        return {
            GitHub: this.github
        };
    };
};

module.exports = Engineer;