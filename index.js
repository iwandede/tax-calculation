const prompt = require('prompt');
const calculator = require('./calculator');

const properties = [
    {
        name: 'amount',
        description: 'Please input salary per month'
    },
    {
        name: 'type',
        description: 'Please input criteria'
    }
];


prompt.start();
console.log('Criteria :');
console.log('TK0 : SINGLE');
console.log('K0 : Married with no dependant');
console.log('K1 : Married with 1 dependant');
console.log('K2 : Married with 2 dependant');
console.log('K3 : Married with 3 dependant');

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('Calculate PPH21');
    let res = calculator.CalculateTax(6500000, "K0")
    console.log('Pajak yang harus di bayar: ' + res);

});

function onErr(err) {
    console.log(err);
    return 1;
}