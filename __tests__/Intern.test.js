const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern ('student');

    expect(intern.name).toBe('student');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('student@university.com');
    expect(intern.school).toBe('School University');
});