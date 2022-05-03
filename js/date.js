let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = monthNames[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ","  +" " + monthName + " " + d.getDate() + "," + " " + year;
document.getElementById(`currentdate`).textContent = fulldate
document.querySelector('#lastUpdate').innerHTML = `Last Updated: ${document.lastModified}`