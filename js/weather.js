const API_KEY = "67aa269752783169aa5a00c658699659";

function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  console.log("You are living in ", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:last-child");
      weather.innerText = data.name;
      city.innerText = `${data.weather[0].main} @ ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you! :(");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
