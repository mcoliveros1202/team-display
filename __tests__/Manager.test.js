const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.job).toBe('Manager');
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email@email.com');
    expect(manager.office).toEqual(expect.any(Number));

});

test("gets manager's role as an object", () => {
    const manager = new Manager('Dave');

    expect(manager.getRole()).toHaveProperty('role', 'Manager');
});

test("get manager's office number as an object", () => {
    const manager = new Manager('Dave');

    expect(manager.getOffice()).toHaveProperty('room', 1)
});