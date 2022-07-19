const forecastEl = document.querySelector("#forecast");
console.log(forecastEl)
fetchForecast = function () {
	let endpoint =
       "https://api.openweathermap.org/data/2.5/onecall?lat=42.3601&lon=-71.0589&exclude=current,hourly,minutely,alerts&units=imperial&appid=8017c1d5aea32b6094764ab6d12a29de";
	

	fetch(endpoint)
	.then(function (response) {
		if (200 !== response.status) {
				"Looks like there was a problem. Status Code: " + response.status
			return;
		}
		

		/*forecastEl[0].classList.add('loaded');*/

		response.json().then(function (data) {
			let fday = "";
			console.log(data)
			data.daily.slice(0, 4).forEach((value, index) => {
				if (index > 0) {
					const dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
						weekday: "long",
					});
					const icon = value.weather[0].icon;
					const iconsrc = `https://openweathermap.org/img/w/${value.weather[0].icon}.png`;
					console.log(icon)
					const temp = value.temp.day.toFixed(0);
					console.log(temp)
					fday = `<div class="forecast-day">
						<p>${dayname}</p>
						<img src=${iconsrc} alt= "weather-icon">
						<div class="forecast-day--temp">${temp}<sup>°C</sup></div>
					</div>`;
					console.log(fday)
					forecastEl.innerHTML +=fday

				}
			});
		});
	})
	.catch(function (err) {
		console.log("Fetch Error :-S", err);
	});
};
fetchForecast()