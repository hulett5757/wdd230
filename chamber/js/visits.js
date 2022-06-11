// initialize display elements
/*const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
const dateDisplay = document.querySelector(".date")
const daysDisplay = document.querySelector(".days")
// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("lastvisit"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

if 	(lastVisit !== 0) {
	daysDisplay.textConetent = lastVisit;
} else {
	daysDisplay.textContent = `none`;
}

// increment the number of visits.
numVisits++;
lastVisit = (Math.floor(Date.now()/(1000*60*60*24)));
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("lastvisit", lastVisit);

currentVisit = (Math.floor(Date.now()/(1000*60*60*24)));

timeDiff = (currentVisit - lastVisit);

// show todays date.
todayDisplay.textContent = Date.now();

daysDisplay.textcontent = timeDiff;

/*daysDisplay.textContent = (Math.floor(Date.now()/(1000*60*60*24)/86000));*/

/*dateDisplay.textContent = new Date();*/

//count the number of page visits
/*var numVisits = Number(window.localStorage.getItem('numVisits'));


//add one each visit
numVisits++

//store the count in local storage as 'numVisits
console.log(numVisits)
window.localStorage.setItem('numVisits', numVisits);



//for each visit use numVisits as the key for each timestamp 
   //get element to put date into.
const todayDisplay = document.querySelector('.today');
    //set the content of the element to the date.
todayDisplay.textContent = Date.now();
    //check with console log
console.log(todayDisplay)

   //change date into number 
var numTodayDisplay = parseFloat(todayDisplay.textContent)
console.log(numTodayDisplay)

    //save date to local storage with visit number as the key.
window.localStorage.setItem(numVisits, numTodayDisplay);

//get today's timestamp as number
numTodayDisplay
//get last visits timestamp as number
var lastTimeStamp = window.localStorage.getItem(numVisits - 1,)
console.log(lastTimeStamp)
//subtract last visits timestamp from today's
var diffMiliSec = numTodayDisplay - lastTimeStamp
console.log(diffMiliSec)

//convert to seconds, min, hrs, days and round
var difSec = diffMiliSec / 1000
console.log(difSec, "seconds")

var difMin = difSec / 60
console.log(difMin)

var difHrs = difMin / 60
var difDays = Math.floor(difHrs / 24)
console.log(difHrs)
console.log(difDays, "days")

//display difDays onto webpage
document.querySelector('.differenceDays').textContent = difDays*/


//count the number of page visits
var numVisits = Number(window.localStorage.getItem('numVisits'));


//add one each visit
numVisits++

//store the count in local storage as 'numVisits
console.log(numVisits)
window.localStorage.setItem('numVisits', numVisits);



//for each visit use numVisits as the key for each timestamp 
   //get element to put date into.
const todayDisplay = document.querySelector('.today');
    //set the content of the element to the date.
todayDisplay.textContent = Date.now();
    //check with console log
console.log(todayDisplay)

   //change date into number 
var numTodayDisplay = parseFloat(todayDisplay.textContent)
console.log(numTodayDisplay)

    //save date to local storage with visit number as the key.
window.localStorage.setItem(numVisits, numTodayDisplay);

//get today's timestamp as number
numTodayDisplay
//get last visits timestamp as number
var lastTimeStamp = window.localStorage.getItem(numVisits - 1,)
console.log(lastTimeStamp)
//subtract last visits timestamp from today's
var diffMiliSec = numTodayDisplay - lastTimeStamp
console.log(diffMiliSec)

//convert to seconds, min, hrs, days and round
var difSec = diffMiliSec / 1000
console.log(difSec, "seconds")

var difMin = difSec / 60
console.log(difMin)

var difHrs = difMin / 60
var difDays = Math.floor(difHrs / 24)
console.log(difHrs)
console.log(difDays, "days")

//display difDays onto webpage
document.querySelector('.differenceDays').textContent = difDays








