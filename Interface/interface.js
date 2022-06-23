var interfaceInput = document.getElementById('InterfaceInput');
var inputData = '**Basic Interface\n';
;
var cust1 = {
    userName: 'Rohan',
    password: 'K123'
};
inputData += 'The data is simple interface: ' + JSON.stringify(cust1) + '\n';
interfaceInput.innerHTML = inputData;
