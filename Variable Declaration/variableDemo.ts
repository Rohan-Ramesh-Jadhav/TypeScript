var textArea: HTMLElement = document.getElementById('dataList');

var Name: string = 'Rohan';
var Age: number = 24;
var Dob: Date = new Date(1997/12/5);
var Feed: boolean;
var FeedDetails: any;
var Complent;
var SpecialHeat = 'No heat';

function detailsFun(){
    Feed = true;
    FeedDetails = 'hello'+6+'times'+true;
    Complent = 'nothing';

    textArea.innerHTML = 'Name: '+Name+'\nAge: '+Age+'\nDOB: '+Dob+'\nFeed: '+
                         Feed+'\nFeedDetails: '+FeedDetails+'\nComplent: '+Complent+
                         '\nSpecialHeat: '+SpecialHeat;
}

detailsFun();