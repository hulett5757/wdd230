let d = new Date();
let year = d.getFullYear();
let fulldate = year;
document.getElementById(`currentyear`).textContent = fulldate
document.querySelector('#lastUpdate').innerHTML = `Last Updated: ${document.lastModified}`