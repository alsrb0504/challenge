const weather = document.querySelector(".js-weather");

const API_KEY = "03f2421e3f208977554e2abf81a6f8a9";

const Coords = "Coords";

function load_position_LS(geo_obj) {
  localStorage.setItem(Coords, JSON.stringify(geo_obj));
}

function handleSuccess(position) {
  const LATITUDE = position.coords.latitude;
  const LONGITUDE = position.coords.longitude;

  const geo_obj = {
    LATITUDE,
    LONGITUDE,
  };

  load_position_LS(geo_obj);
  use_weather_api(geo_obj);
}

function handleError() {
  console.log("location error");
}

function setGeoLocation() {
  const position = navigator.geolocation.getCurrentPosition(
    handleSuccess,
    handleError
  );
}

function use_weather_api(geo) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${geo.LATITUDE}&lon=${geo.LONGITUDE}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const Temp = json.main.temp;
      const Place = json.name;

      weather.innerHTML = `${Temp} @ ${Place}`;
    });
}

function init() {
  const geo = JSON.parse(localStorage.getItem(Coords));

  if (geo === null) {
    setGeoLocation();
  } else {
    use_weather_api(geo);
  }
}

init();
