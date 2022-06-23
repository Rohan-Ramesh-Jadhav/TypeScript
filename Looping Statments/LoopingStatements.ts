let loopingInput = document.getElementById('loopingInput');
let arr = [10,20,30,40,50];
let inputData = '**Simple for loop for array: '+arr+'\n';
//simple for loop
for(let index=0; index<arr.length; index++)
{
    inputData = inputData + arr[index]+'\n';
}

inputData = inputData + '**Foreach loop for array: '+arr+'\n';

//foreach loop
for(let value in arr)
{
    inputData = inputData + arr[value] + '\n';
}

inputData = inputData + '**Simple while loop for array: '+arr+'\n';

//simple while loop
let index=0;
while(index<arr.length)
{
    inputData = inputData + arr[index++] + '\n';
}

inputData = inputData + '**do while loop for array: '+arr+'\n';

//simple do while loop
index = 0;
do{
    inputData = inputData + arr[index++] + '\n';
}while(index<arr.length);

inputData = inputData + '**continue and break\n';
//break and continue
for(let index=0; index<arr.length; index++)
{
    if(index==3)
    {
        break;
    }
    else{
        inputData = inputData + arr[index]+'\n';
        continue;
    }
}

loopingInput.innerHTML = inputData;
