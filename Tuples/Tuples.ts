let tupleInput = document.getElementById('tupleId');
let inputData = '**Empty tuple\n';

let tuple = [];
inputData = inputData + 'Empty tuple: '+tuple+'\n';

inputData = inputData + '**tuple with different types of value\n';

tuple[0] = 'Zysk';
tuple[1] = 1;
tuple[2] = 0.1234;
tuple[3] = [1,2,3];
tuple[4] = {message1:'hello',message2:'World'};

inputData = inputData + 'Exampler :'+tuple;

tupleInput.innerHTML = inputData;
