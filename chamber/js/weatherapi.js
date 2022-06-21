// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?id={5861896}&appid={8017c1d5aea32b6094764ab6d12a29de}";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
  });

const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
const desc = data.weather[0].description;

weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
captionDesc.textContent = desc;