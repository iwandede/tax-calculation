

const MONTH = 12
const rates = [{
    min: 0,
    max: 50e6,
    percentage: 5
}, {
    min: 50e6,
    max: 250e6,
    percentage: 15
}, {
    min: 250e6,
    max: 500e6,
    percentage: 25
}, {
    min: 500e6,
    max: Infinity,
    percentage: 30
}];

const category = [{
    type: "TK0",
    value: 54e6
}, {
    type: "K0",
    value: 585e5
}, {
    type: "K1",
    value: 63e6
}, {
    type: "K2",
    value: 675e5
}, {
    type: "K3",
    value: 72e6
}]

let calculator = {}
calculator.getTax = (amount, rates) => {
    var brackets = []
    amount = amount
    rates.forEach(rate => {
        if (amount > rate.max) {
            brackets.push({
                amount: rate.max - rate.min + 0,
                percentage: rate.percentage
            })
        }

        if (amount >= rate.min && amount <= rate.max) {
            brackets.push({
                amount: amount - rate.min + 0,
                percentage: rate.percentage
            })
        }
    })
    return brackets
}

calculator.calculateTaxScheme = (amount, rates) => {
    var tax = 0
    const brackets = calculator.getTax(amount * MONTH, rates)

    brackets.forEach(bracket => {
        tax = tax + bracket.amount * (bracket.percentage / 100)
    })

    tax = Math.round(tax)
    return tax
}

calculator.CalculateTax = (income, status) => {
    if (!category.some(e => e.type === status)) return "Category is not found!"
    let tax = 0
    let AnnualIncome = income * MONTH

    let statusPerson = category.filter(x => x.type == status)[0]

    let AnnualTaxIncome = AnnualIncome - statusPerson.value
    const brackets = calculator.getTax(AnnualTaxIncome, rates)

    brackets.forEach(bracket => {
        tax = tax + bracket.amount * (bracket.percentage / 100)
    })

    tax = Math.round(tax)
    return tax
}

//console.log(calculateTaxScheme(25000000, rates))
//console.log(CalculateTax(6500000, "K0"))

module.exports = calculator;