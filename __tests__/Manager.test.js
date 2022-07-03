const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email@email.com');
    expect(manager.office).toEqual(expect.any(Number));
});
