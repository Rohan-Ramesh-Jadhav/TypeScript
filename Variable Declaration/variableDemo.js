var textArea = document.getElementById('dataList');
var Name = 'Rohan';
var Age = 24;
var Dob = new Date(1997 / 12 / 5);
var Feed;
var FeedDetails;
var Complent;
var SpecialHeat = 'No heat';
function detailsFun() {
    Feed = true;
    FeedDetails = 'hello' + 6 + 'times' + true;
    Complent = 'nothing';
    textArea.innerHTML = 'Name: ' + Name + '\nAge: ' + Age + '\nDOB: ' + Dob + '\nFeed: ' +
        Feed + '\nFeedDetails: ' + FeedDetails + '\nComplent: ' + Complent +
        '\nSpecialHeat: ' + SpecialHeat;
}
detailsFun();
