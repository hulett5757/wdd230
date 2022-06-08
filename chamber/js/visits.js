// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
const dateDisplay = document.querySelector(".date")
const daysDisplay = document.querySelector(".days")
// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
 
/*let visit1 = (Math.floor(Date.now()/(1000*60*60*24)));

let visit2 = new Date();

let timeDiff = (visit1 - visit2);*/

// show todays date.
todayDisplay.textContent = Date.now();

/*daysDisplay.textcontent = timeDiff;*/

daysDisplay.textContent = (Math.floor(Date.now()/(1000*60*60*24)/86000));

dateDisplay.textContent = new Date();
