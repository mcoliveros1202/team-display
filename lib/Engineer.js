function Engineer(name = '', email = 'engineer@email.com', github = 'fakegithub') {
    this.name = name;
    this.email = email;
    this.github = github;

    this.id = Math.floor(100);
};

module.exports = Engineer;