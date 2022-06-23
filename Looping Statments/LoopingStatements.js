var loopingInput = document.getElementById('loopingInput');
var arr = [10, 20, 30, 40, 50];
var inputData = '**Simple for loop for array: ' + arr + '\n';
//simple for loop
for (var index_1 = 0; index_1 < arr.length; index_1++) {
    inputData = inputData + arr[index_1] + '\n';
}
inputData = inputData + '**Foreach loop for array: ' + arr + '\n';
//foreach loop
for (var value in arr) {
    inputData = inputData + arr[value] + '\n';
}
inputData = inputData + '**Simple while loop for array: ' + arr + '\n';
//simple while loop
var index = 0;
while (index < arr.length) {
    inputData = inputData + arr[index++] + '\n';
}
inputData = inputData + '**do while loop for array: ' + arr + '\n';
//simple do while loop
index = 0;
do {
    inputData = inputData + arr[index++] + '\n';
} while (index < arr.length);
inputData = inputData + '**continue and break\n';
//break and continue
for (var index_2 = 0; index_2 < arr.length; index_2++) {
    if (index_2 == 3) {
        break;
    }
    else {
        inputData = inputData + arr[index_2] + '\n';
        continue;
    }
}
loopingInput.innerHTML = inputData;
