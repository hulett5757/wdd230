const windSpeed2 = document.querySelector("#wind-speed");
const currentTemp2 = ("current-temp2");
const feelLike = document.getElementById("feel-like");
const url2 = "https://api.openweathermap.org/data/2.5/weather?q=Tooele&appid=8017c1d5aea32b6094764ab6d12a29de&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url2);
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


function buildWC(currentTemp2, windSpeed) {  

//compute the wind chill//
const wc = 35.74 + 0.6215 * currentTemp2 - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp2 * Math.pow(windSpeed, 0.16);
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
windSpeed2.innerHTML =`${weatherData.wind.speed.toFixed(0)}`;
feelLike.innerHTML =`${weatherData.main.feels_like.toFixed(0)}`;
wc.innerHTML = `wc`;

return wc;
}