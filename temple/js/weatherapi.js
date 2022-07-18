//Use the wind chill function//
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const feelsLike = document.querySelector("#feels-like");
const windChill = document.querySelector("#wc");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=8017c1d5aea32b6094764ab6d12a29de&units=imperial";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
  }
}

apiFetch();

function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
  windSpeed.innerHTML =`${weatherData.wind.speed.toFixed(0)}`;
  feelsLike.innerHTML =`${weatherData.main.feels_like.toFixed(0)}`;
  buildWC(currentTemp.innerText, windSpeed.innerText)
  humidity.innerHTML = `${weatherData.main.humidity}`;
}

function buildWC(currentTemp, windSpeed) {  

  //compute the wind chill//
  let wc = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
  
  //Round the answer down to integer//
  wc = Math.floor(wc);
  
  //If temp <= 50 and speed > 3 wind chill//
  if (currentTemp <= 50 && windSpeed > 3) {
      wc = wc;
  } else {
      wc = "N/A";
  }
  
  //Display the wind chill//
  windChill.innerHTML = wc;
  
  return wc;
  }