let unionInput = document.getElementById('unionInput');
let inputData = '**simple union type with number and string type\n';

let input:string | number;

input = 10;
inputData += 'The assigned value for input is number: '+input+'\n';

input = 'Zysk';

inputData += 'The assigned value for the input is string: '+input+'\n';

inputData += '** Unions with array\n';

let inputWithArray: string | string[];

inputWithArray = 'Zysk';

inputData += 'The assigned value to inputWithArray is string: '+inputWithArray+'\n';

inputWithArray = ['string1','string2'];

inputData += 'The assigned value to inputWithArray is array of string: '+inputWithArray+'\n';


inputData += '**Union of hetroginus arrays\n';

let inputDiffArr: string[] | number[];

inputDiffArr = [1,2,3,4];

inputData += 'The assigned data to the inputDiffArr is array of numbers: '+inputDiffArr+'\n';

inputDiffArr = ['name1','name2'];

inputData += 'The assigned data to the inputDiffArr is array of string: '+inputDiffArr+'\n';

unionInput.innerHTML = inputData;