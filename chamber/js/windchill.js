//Use the wind chill function//
let speed = 10;
let temp = 35;
let feelTemp = document.getElementById("feelTemp");
feelTemp.innerHTML = buildWC(speed, temp);

function buildWC(speed, temp) {  

//compute the wind chill//
let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
console.log(wc);

//Round the answer down to integer//
wc = Math.floor(wc);

//If temp <= 50 and speed > 3 wind chill//
if (temp <= 50 && speed > 3) {
    wc = wc;
} else {
    wc = "N/A";
}

//Display the wind chill//
console.log(wc);

return wc;
}