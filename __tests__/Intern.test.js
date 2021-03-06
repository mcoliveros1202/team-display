const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern ('student', 4,'student@university.com', 'School University');

    expect(intern.name).toBe('student');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('student@university.com');
    expect(intern.school).toBe('School University');
});

test("gets intern's role as an object", () => {
    const intern = new Intern ('student', 4,'student@university.com', 'School University');

    expect(intern.getRole()).toBe('Intern');
});