var conditionalTag = document.getElementById('ConditionalTag');
var var1 = 10;
var var2 = 20;
var tagData = '';
//simple if condition
tagData = '**Simple If**';
if (var1 < var2) {
    tagData = tagData + '\nFirst number is smaller then second number';
}
if (var2 > var1) {
    tagData = tagData + '\nSecond number is bigger the first number';
}
if (var2 >= var1) {
    tagData = tagData + '\nSecond number is bigger or equal to first number';
}
if (var1 <= var2) {
    tagData = tagData + '\nFirst number is smaller or equal to second number';
}
if (1 == 1) {
    tagData = tagData + '\nFirst and second number are equal';
}
if (var1 != var2) {
    tagData = tagData + '\nFirst and second number are not equal';
}
tagData = tagData + '\n**If else condition**';
if (var1 > var2) {
    tagData = tagData + '\nFirst value is bigger then second number';
}
else {
    tagData = tagData + '\nSecond number is bigger then firt number';
}
if (var1 < var2) {
    tagData = tagData + '\nFirst value is smaller then second number';
}
else {
    tagData = tagData + '\nSecond number is smaller then firt number';
}
if (var1 == var2) {
    tagData = tagData + '\nboth numbers are equal';
}
else {
    tagData = tagData + '\nboth numbers are not equal';
}
tagData = tagData + '\n**Nested If conditions**';
if (var1 < var2) {
    if (var1 == 10) {
        tagData = tagData + '\nfirst number is less then second number and equal to 10';
    }
}
else {
    if (var1 == 10) {
        tagData = tagData + '\nfirst number is greater then second number and equal to 10';
    }
}
if (var1 < var2) {
    if (var1 == 10) {
        if (var2 == 20) {
            tagData = tagData + '\nfirst number is smaller then second number, first number is equal to 10 and second number is equal to 20';
        }
    }
}
tagData = tagData + '\n**Switch Case**';
var ch = '3';
switch (ch) {
    case '1': {
        tagData + '\n Day is Monday';
        break;
    }
    case '2': {
        tagData + '\n Day is Tuesday';
        break;
    }
    case '3': {
        tagData + '\n Day is Wednasday';
        break;
    }
    case '4': {
        tagData + '\n Day is Thursday';
        break;
    }
    case '5': {
        tagData + '\n Day is Friday';
        break;
    }
    case '6': {
        tagData + '\n Day is Saturday';
        break;
    }
    case '7': {
        tagData + '\n Day is Sunday';
        break;
    }
    default: {
        tagData + '\n Invalid';
        break;
    }
}
conditionalTag.innerHTML = tagData;
