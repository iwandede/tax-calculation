const calculator = require('../calculator');

describe("Tax calculation function", () => {
    test('Salary 6.500.000 and status Married with 1 dependant is 750.000', () => {
        expect(calculator.CalculateTax(6500000, "K1")).toBe(750000);
    })

    test('Salary 25.000.000 and status Single is 31.900.000', () => {
        expect(calculator.CalculateTax(25000000, "TK0")).toBe(31900000);
    })
})