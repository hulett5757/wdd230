fetchForecast = function () {
	let endpoint =
       "https://api.openweathermap.org/data/2.5/onecall?lat=42.3601&lon=-71.0589&exclude=current,hourly,minutely,alerts&units=imperial&appid=8017c1d5aea32b6094764ab6d12a29de";
	const forecastEl = document.getElementsByClassName("forecast");
    console.log(forecast);

	fetch(endpoint)
	.then(function (response) {
		if (200 !== response.status) {
			console.log(
				"Looks like there was a problem. Status Code: " + response.status
			);
			return;
		}

		forecastEl[0].classList.add('loaded');

		response.json().then(function (data) {
			const fday = "";
			data.daily.forEach((value, index) => {
				if (index > 0) {
					const dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
						weekday: "long",
					});
					const icon = value.weather[0].icon;
					const temp = value.temp.day.toFixed(0);
					fday = `<div class="forecast-day">
						<p>${dayname}</p>
						<p><span class="ico-${icon}" title="${icon}"></span></p>
						<div class="forecast-day--temp">${temp}<sup>°C</sup></div>
					</div>`;
					forecastEl[0].insertAdjacentHTML('beforeend', fday);
                    console.log();
				}
			});
		});
	})
	.catch(function (err) {
		console.log("Fetch Error :-S", err);
	});
};