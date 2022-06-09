// initialize display elements
const todayDisplay = document.querySelector(".today");
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

dateDisplay.textContent = new Date();
