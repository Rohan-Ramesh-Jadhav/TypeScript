let functionInput = document.getElementById('functionInput');

let inputData = '**Simple non parametric and non returning function \n';

//simple function
function foo()
{
    inputData = inputData + 'simple function \n';
}
foo();

inputData = inputData + '**Function with parameter and non returning\n';

//function with parameters
function nameFun(name: string)
{
    inputData = inputData + 'input from parameter passed: '+name+'\n';
}
nameFun('Zysk');

inputData = inputData + '**Function with return and non parametric\n'

//function with return

function returnFun(): string{
    return 'hello';
}

inputData = inputData + 'returned value but not passed: '+returnFun()+'\n';

inputData = inputData + '**Function with return and with parameter\n';

//function with return and parametric

function returnParametricFun(name:string):string{
    return name;
}

inputData = inputData + 'Name has been passed and returned the same: '+returnParametricFun('Zysk')+'\n';

inputData = inputData + '**Function with optional parameter\n';

function optionalParaFun(name:string,age?:number){
    inputData = inputData + 'Name is non-optional: '+name+' Age is the optional: '+age+'\n';
}
optionalParaFun('Zysk');
optionalParaFun('Rohan',24);

inputData = inputData + '**default valued function\n';

function defaultValue(name:string, age:number = 18){
    inputData = inputData + 'Name is not default valued: '+name+' age is default valued: '+age+'\n';
}
defaultValue('Rohan');

inputData = inputData + '**Anonymus function demo\n';

var keyVal = function(){
    return 'Zysk';
}

inputData = inputData + 'This value is returned by anonymus function: '+keyVal()+'\n';

inputData = inputData + '**...Notation parametric function\n';

function notationFun(...names){
    for(let index in names)
    {
        inputData = inputData + names[index]+'\n';
    } 
}
notationFun('name1', 'name2', 'name3');

inputData = inputData + '** Lambda function/ Arrow functtion\n';

var arrow = (num1:number, num2:number)=>num1+num2;

inputData = inputData + 'The out put from arrow function: '+arrow(10,20)+'\n';

functionInput.innerHTML = inputData;