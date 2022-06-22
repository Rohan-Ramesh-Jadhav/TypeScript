var OperationElement = document.getElementById('operationsDetails');
var totalData = '';
var DataClass = /** @class */ (function () {
    function DataClass() {
        this.val1 = 10;
        this.val2 = 20;
    }
    return DataClass;
}());
function basicOperationsNumaric() {
    var numberOperationObj = new DataClass();
    //addition of two numers
    totalData = totalData + 'Addition of two numbers: ' + (numberOperationObj.val1 + numberOperationObj.val2) + '\n';
    //subtraction of two numbers
    totalData = totalData + 'Subtraction of two numbers: ' + (numberOperationObj.val2 - numberOperationObj.val1) + '\n';
    //product of two numbers
    totalData = totalData + 'Product of two numbers: ' + numberOperationObj.val1 * numberOperationObj.val2 + '\n';
    //Difference of two numbers
    totalData = totalData + 'Differenc of two numbers: ' + numberOperationObj.val1 / numberOperationObj.val2 + '\n';
    //Modulus of the two numbers
    totalData = totalData + 'Modulus of two numbers: ' + (numberOperationObj.val1 % numberOperationObj.val2) + '\n';
    //increment of number and decrement of number
    totalData = totalData + 'increment of numbers: ' + numberOperationObj.val1 + ' increased to ' + (++numberOperationObj.val1) + '\n' +
        'decrement of numbers: ' + numberOperationObj.val2 + ' decremented to ' + (--numberOperationObj.val2) + '\n';
    OperationElement.innerHTML = totalData;
}
basicOperationsNumaric();
