function refreshWeather(response) {
  let temperature = response.data.temperature.current;
  console.log(temperature);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(temperature);
  console.log(temperatureElement);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windSpeedElement = document.querySelector("#windSpeed");
  windSpeedElement.innerHTML = `${response.data.wind.speed}Km/hr`;
  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = formatDate(date);
  ///bug
  console.log(timeElement);
  let date = newDate(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  ///bug
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon/>`;
  console.log(iconElement);

  getForecast(response.data.city);
}
/// This function formats the city date then displays on the screen
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;

    return `${day}${hours}:${minutes}`;
  }
}
function searchCity(city) {
  let apiKey = "594o02104b870cb39413fdbd5t9a24d2";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

///Final function element
function handleSearchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchFormInput");
  searchCity(searchInput.value);
}
function formatDay(timestamp) {
  let date = newDate(timestamp * 1000);
  console.log(date);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}
///This function displays the forecast information from api and injects it on html
function getForecast(city) {
  let apiKey = "594o02104b870cb39413fdbd5t9a24d2";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
  console.log(apiUrl);
}

function displayForecast(response) {
  let forecastHtml = "";

  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      forecastHtml =
        forecastHtml +
        `
      <div class="weather-forecast-day">
        <div class="weather-forecast-date">${formatDay(day.time)}</div>

        <img src="${day.condition.icon_url}" class="weather-forecast-icon" />
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>${Math.round(day.temperature.maximum)}º</strong>
          </div>
          <div class="weather-forecast-temperature">${Math.round(
            day.temperature.minimum
          )}º</div>
        </div>
      </div>
    `;
    }
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
  console.log(forecastElement);
}

let searchFormatElement = document.querySelector("#searchCity");
searchFormatElement.addEventListener("submit", handleSearchCity);
searchCity("Paris");
