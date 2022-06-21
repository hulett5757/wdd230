//Use the wind chill function//
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.querySelector("#wind-speed");
const feelsLike = document.querySelector("#feels-like");
const url = "https://api.openweathermap.org/data/2.5/weather?q=Tooele&appid=8017c1d5aea32b6094764ab6d12a29de&units=imperial";

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
      console.log(error);
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
}