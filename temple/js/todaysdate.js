const options = {weekday: `long`, month: `long`, day: `numeric`, year: `numeric`};
document.getElementById(`todaysdate`).textContent = new Date().toLocaleDateString(`en-UK`, options);