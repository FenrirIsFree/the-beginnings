// born 1996
const myAge = 26;

// first 2 years of a dogs life are worth 10.5
let earlyYears = 2;

earlyYears *= 10.5;

// the years after the first 2 years of a dog's life are worth 4
let laterYears = myAge -2;

laterYears *= 4;

// now add both values together to get my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// enter name and make sure it is all lower case
const myName = 'NichOLas'.toLowerCase();

// show calculated information using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
