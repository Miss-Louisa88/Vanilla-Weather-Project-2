function refreshWeather(response) {
  console.log(response);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}
function searchCity(city) {
  let apiKey = "594o02104b870cb39413fdbd5t9a24d2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}

///Final function element
function handleSearchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchFormInput");
  searchCity(searchInput.value);
}
///This function displays the forecast information from api and injects it on html
function displayForecast(response) {
  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
  (forecastHtml = ""),
    days.forEach(function (day) {
      forecastHtml =
        forecastHtml +
        `<div class="weather-forecast-day">
      <div class="weather-forecast-date">${day}</div>
      <div class="weather-forecast-icon"></div>
      <div class="weather-forecast-temperatures">
      <div class="weather-forecast-temperature">
      <strong> 15 </strong> </div>
      <div class="weather-forecast-temperature"> 9</div>
      </div> </div>`;
    });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormatElement = document.querySelector("#searchCity");
searchFormatElement.addEventListener("submit", handleSearchCity);
