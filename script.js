let form = document.getElementById("form");
let search = document.getElementById("search");
let main = document.getElementById("main");
let sun = "./image/Sun.png";
let Rain = "./image/Rain.png";
let cloud = "./image/Cloud.png";

const Url = (city) => {
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3f6c1a22658f737ab738fca195f7b61`;
};

async function GetWheather(city) {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c3f6c1a22658f737ab738fca195f7b61`
  )
    .then((data) => data.json())
    .then((data) => {
      addWeathertoPage(data);
    });
}

function FindWhether(img) {
  console.log(img);
  if (img === "Rain") {
    return Rain;
  } else if (img === "Clear") {
    return sun;
  } else if (img === "Mist") {
    return cloud;
  } else if (img === "Clouds") {
    return cloud;
  } else if (img === "Snow") {
    return Rain;
  } else if (img === "Smoke") {
    return cloud;
  } else if (img === "Haze") {
    return cloud;
  }
}
function addWeathertoPage(data) {
  const temp = TempHisobla(data.main.temp);

  const weather = document.createElement("div");
  weather.classList.add("wheather");

  weather.innerHTML = `
    <h2>
    <img src="${FindWhether(data.weather[0].main)}" alt="" />
    ${temp}
    </h2>
    <small>${data.weather[0].main}</small>
    `;

  main.innerHTML = "";
  main.appendChild(weather);
}
function TempHisobla(K) {
  return Math.floor(K - 273.15);
}
// 0C is equal to 273.15 kelvins

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = search.value;

  if (city) {
    GetWheather(city);
  }
});
