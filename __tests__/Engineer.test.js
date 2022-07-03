const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Mandy');

    expect(engineer.name).toBe('Mandy');
    expect(engineer.email).toBe('engineer@email.com');
    expect(engineer.github).toBe('fakegithub');
    expect(engineer.id).toEqual(expect.any(Number));
});