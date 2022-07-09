const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Dave', 1, 'email@email.com', 344);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email@email.com');
    expect(manager.office).toEqual(expect.any(Number));

});

test("gets manager's role as an object", () => {
    const manager = new Manager('Dave', 1, 'email@email.com', 344);

    expect(manager.getRole()).toBe('Manager');
});

test("get manager's office number as an object", () => {
    const manager = new Manager('Dave', 1, 'email@email.com', 344);

    expect(manager.getOffice()).toBe(344)
});