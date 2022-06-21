const windSpeed = document.querySelector("#wind-speed");
const currentTemp2 = ("current-temp2");
const feelLike = document.getElementById("feel-like");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Tooele&appid=8017c1d5aea32b6094764ab6d12a29de&units=imperial";
feelLike.innerHTML = buildWC(windSpeed, currentTemp2);

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      buildWC(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();


function buildWC(weatherData) {  

//compute the wind chill//
let wc = 35.74 + 0.6215 * currentTemp2 - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp2 * Math.pow(windSpeed, 0.16);
console.log(wc);

//Round the answer down to integer//
wc = Math.floor(wc);

//If temp <= 50 and speed > 3 wind chill//
if (currentTemp2 <= 50 && windSpeed > 3) {
    wc = wc;
} else {
    wc = "N/A";
}

//Display the wind chill//
console.log(wc);
windSpeed.innerHTML =`${weatherData.wind.speed.toFixed(0)}`;
feelLike.innerHTML =`${weatherData.main.feels_like.toFixed(0)}`;

return wc;
}