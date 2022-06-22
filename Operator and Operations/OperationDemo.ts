let OperationElement = document.getElementById('operationsDetails');
let totalData:string = '';
class DataClass{
    val1: number = 10;
    val2: number = 20;
}

function basicOperationsNumaric(){
    const numberOperationObj = new DataClass();

    //addition of two numers
    totalData = totalData+'Addition of two numbers: '+(numberOperationObj.val1+numberOperationObj.val2)+'\n';

    //subtraction of two numbers
    totalData = totalData+'Subtraction of two numbers: '+(numberOperationObj.val2-numberOperationObj.val1)+'\n';

    //product of two numbers
    totalData = totalData+'Product of two numbers: '+numberOperationObj.val1*numberOperationObj.val2+'\n';

    //Difference of two numbers
    totalData = totalData+'Differenc of two numbers: '+numberOperationObj.val1/numberOperationObj.val2+'\n';

    //Modulus of the two numbers
    totalData = totalData+'Modulus of two numbers: '+(numberOperationObj.val1%numberOperationObj.val2)+'\n';

    //increment of number and decrement of number
    totalData = totalData+'increment of numbers: '+numberOperationObj.val1+' increased to '+(++numberOperationObj.val1)+'\n'+
                'decrement of numbers: '+numberOperationObj.val2+' decremented to '+(--numberOperationObj.val2)+'\n';

    OperationElement.innerHTML = totalData;
}
basicOperationsNumaric();

