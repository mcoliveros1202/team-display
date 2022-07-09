const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee ('employee', 3, 'employee@email.com');

    expect(employee.name).toBe('employee');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('employee@email.com');
});