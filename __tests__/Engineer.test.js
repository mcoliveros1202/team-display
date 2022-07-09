const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Mandy', 8,'engineer@email.com', 'fakegithub');

    expect(engineer.name).toBe('Mandy');
    expect(engineer.email).toBe('engineer@email.com');
    expect(engineer.github).toBe('fakegithub');
    expect(engineer.id).toEqual(expect.any(Number));
});

test("gets engineer's role as an object", () => {
    const engineer = new Engineer('Mandy', 8,'engineer@email.com', 'fakegithub');

    expect(engineer.getRole()).toBe('Engineer');
});

test("get engineer's GitHub username as an object", () => {
    const engineer = new Engineer('Mandy', 8,'engineer@email.com', 'fakegithub');

    expect(engineer.getGithub()).toBe('fakegithub');
});