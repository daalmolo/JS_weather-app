"use strict";

const apiKey = "fe50f802ba893e166f536a97138cdea9";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const cityTemp = document.getElementsByClassName("weather__temp")[0];
const cityName = document.getElementsByClassName("weather__city")[0];
const humidityPercent = document.getElementsByClassName("humidity__percent")[0];
const windSpeed = document.getElementsByClassName("wind__speed")[0];
const citySearch = document.getElementsByClassName("card__search__input")[0];

const weatherIcon = document.getElementsByClassName("weather__icon")[0];

async function checkCityWeather() {
  const cityInput = citySearch.value;

  const response = await fetch(apiURL + `&q=${cityInput}&appid=${apiKey}`);
  const data = await response.json();

  cityTemp.innerHTML = `${data.main.temp}°C`;
  cityName.innerHTML = data.name;
  humidityPercent.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${data.wind.speed}km/h`;

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "images/clear.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
    case "Rain":
      weatherIcon.src = "images/rain.png";
      break;
    case "Snow":
      weatherIcon.src = "images/snow.png";
      break;
  }

  console.log(data);
}

checkCityWeather();
