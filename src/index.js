function searchCity(city) {
  let apiKey = "594o02104b870cb39413fdbd5t9a24d2";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=Paris&key=${apikey}&units=metric";
  console.log(apiUrl);
}

/// To correct this code
function displayForecast(response) {
  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
  forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      ` <div class="weather-forecast-day">
      <div class="weather-forecast-date">${day}</div>
      <div class="weather-forecast-icon">🌧️</div>
      <div class="weather-forecast-temperatures">
      <div class="weather-forecast-temperature">
      <stong> 15°C </strong> </div>
      <div class="weather-forecast-temperature"> 9°C </div> </div></div>

    `;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}
