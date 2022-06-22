class DemoClass{
    public Name: string;
    private Age: number;
    private Place: string;

    constructor(){
        this.Name = 'Rohan';
        this.Age = 24;
        this.Place = 'Bangaluru';
    }

    displayDefaultDetails(){
        console.log('Default Name: '+this.Name);
        console.log('Default Age: '+this.Age);
        console.log('Default Place: '+this.Place);
    }

    private changeDetails(name,age,place){
        this.Name = name;
        this.Age = age;
        this.Place = place;
    }

    displayDetails(name,age,place){
        this.changeDetails(name,age,place);
        console.log('Changed Name: '+this.Name);
        console.log('Changed Age: '+this.Age);
        console.log('Changed Place: '+this.Place);
    }
}

//declaration of the objects these will trigger the constructor
const firstObj = new DemoClass();
const thirdObj = new DemoClass();
// default value will be of the values of constructor
firstObj.displayDefaultDetails();
// changed value will be of the values passed
firstObj.displayDetails('Rahul',32,'Mangaluru');

const secondObj = new DemoClass();
// default value will of the constructor assigned
secondObj.displayDefaultDetails();
//changed value will be of variable passed
secondObj.displayDetails('Ramesh',64,'Belagavi');

//default value will be the values in constructor
thirdObj.displayDefaultDetails();
// changed value will be of that of the variable passed below
thirdObj.displayDetails('Chetan',29,'Bangaluru');


