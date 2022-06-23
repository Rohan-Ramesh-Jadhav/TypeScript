let interfaceInput = document.getElementById('InterfaceInput');
let inputData = '**Basic Interface\n';

interface IUserDetails{
    userName:string,
    password:string | number
};

let cust1:IUserDetails = {
    userName : 'Rohan',
    password : 'K123'
}

inputData += 'The data is simple interface: '+JSON.stringify(cust1)+'\n'; 

interfaceInput.innerHTML = inputData;