var DemoClass = /** @class */ (function () {
    function DemoClass() {
        this.Name = 'Rohan';
        this.Age = 24;
        this.Place = 'Bangaluru';
    }
    DemoClass.prototype.displayDefaultDetails = function () {
        console.log('Default Name: ' + this.Name);
        console.log('Default Age: ' + this.Age);
        console.log('Default Place: ' + this.Place);
    };
    DemoClass.prototype.changeDetails = function (name, age, place) {
        this.Name = name;
        this.Age = age;
        this.Place = place;
    };
    DemoClass.prototype.displayDetails = function (name, age, place) {
        this.changeDetails(name, age, place);
        console.log('Changed Name: ' + this.Name);
        console.log('Changed Age: ' + this.Age);
        console.log('Changed Place: ' + this.Place);
    };
    return DemoClass;
}());
//declaration of the objects these will trigger the constructor
var firstObj = new DemoClass();
var thirdObj = new DemoClass();
// default value will be of the values of constructor
firstObj.displayDefaultDetails();
// changed value will be of the values passed
firstObj.displayDetails('Rahul', 32, 'Mangaluru');
var secondObj = new DemoClass();
// default value will of the constructor assigned
secondObj.displayDefaultDetails();
//changed value will be of variable passed
secondObj.displayDetails('Ramesh', 64, 'Belagavi');
//default value will be the values that has been passed by object secondObj above
thirdObj.displayDefaultDetails();
// changed value will be of that of the variable passed below
thirdObj.displayDetails('Chetan', 29, 'Bangaluru');
