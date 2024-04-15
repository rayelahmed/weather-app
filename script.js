const apiKey = "53112425909ba106d5be0cb409053918";
let cityName = "";

// Function to save the city name
function saveCityName(event) {
  event.preventDefault();
  const inputField = document.getElementById("floatingInput");
  cityName = inputField.value.trim();
  localStorage.setItem("cityName", cityName);
  inputField.value = "";
  fetchData();
  return cityName;
}

window.onload = function () {
  const savedCityName = localStorage.getItem("cityName");
  cityName = savedCityName;
  fetchData();
};

async function fetchData() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
  );

  if (response.status == 404) {
    document.querySelector(
      ".error-message"
    ).innerHTML = `<p> <span id="error">error</span> <br> you search a wrong city name !</p>`;
  } else {
    document.querySelector(".error-message").innerHTML = ``;
  }
  let data = await response.json();
  console.log(data.list);

  document.querySelector(".country").innerHTML = data.city.name;
  document.querySelector(".humidity").innerHTML =
    data.list[0].main.humidity + "%";
  document.querySelector(".air-pressure").innerHTML =
    data.list[0].main.pressure + "hpa";
  document.querySelector(".visibility").innerHTML =
    data.list[0].visibility + "m";

  document.querySelector(".wind").innerHTML = data.list[0].wind.speed + "mph";
  document.querySelector(
    ".weather-condition"
  ).innerHTML = ` <img id="union" src="/img/icons/${data.list[0].weather[0].description}.png" alt="" />`;

  // timeString0

  for (i = 0; i <= 5; i++) {}

  let timeString = data.list[0]["dt_txt"].split(" ")[1];
  let [hours, minutes, seconds] = timeString.split(":");
  hours = hours % 12 || 12;
  let meridiem = hours < 12 ? "AM" : "PM";
  let formattedTime = `${hours}:${minutes}:${seconds} ${meridiem}`;

  // timeString1

  let timeString1 = data.list[1]["dt_txt"].split(" ")[1];
  let [hours1, minutes1, seconds1] = timeString1.split(":");
  hours1 = hours1 % 12 || 12;
  let meridiem1 = hours1 < 12 ? "AM" : "PM";
  let formattedTime1 = `${hours1}:${minutes1}:${seconds1} ${meridiem1}`;

  //  timeString2

  let timeString2 = data.list[2]["dt_txt"].split(" ")[1];
  let [hours2, minutes2, seconds2] = timeString2.split(":");
  hours2 = hours2 % 12 || 12;
  let meridiem2 = hours2 < 12 ? "AM" : "PM";
  let formattedTime2 = `${hours2}:${minutes2}:${seconds2} ${meridiem2}`;

  //  timeString3

  let timeString3 = data.list[3]["dt_txt"].split(" ")[1];
  let [hours3, minutes3, seconds3] = timeString3.split(":");
  hours3 = hours3 % 12 || 12;
  let meridiem3 = hours3 < 12 ? "AM" : "PM";
  let formattedTime3 = `${hours3}:${minutes3}:${seconds3} ${meridiem3}`;

  //  timeString4

  let timeString4 = data.list[4]["dt_txt"].split(" ")[1];
  let [hours4, minutes4, seconds4] = timeString4.split(":");
  hours4 = hours4 % 12 || 12;
  let meridiem4 = hours4 < 12 ? "AM" : "PM";
  let formattedTime4 = `${hours4}:${minutes4}:${seconds4} ${meridiem4}`;

  document.querySelector(".time1").innerHTML = formattedTime;
  document.querySelector(".time2").innerHTML = formattedTime1;
  document.querySelector(".time3").innerHTML = formattedTime2;
  document.querySelector(".time4").innerHTML = formattedTime3;
  document.querySelector(".time5").innerHTML = formattedTime4;

  document.querySelector(
    ".weather-img"
  ).innerHTML = ` <img id="icon" src="/img/icons/${data.list[0].weather[0].description}.png" alt="" />`;

  document.querySelector(
    ".weather-img2"
  ).innerHTML = ` <img id="icon" src="/img/icons/${data.list[1].weather[0].description}.png" alt="" />`;

  document.querySelector(
    ".weather-img3"
  ).innerHTML = ` <img id="icon" src="/img/icons/${data.list[2].weather[0].description}.png" alt="" />`;
  document.querySelector(
    ".weather-img4"
  ).innerHTML = ` <img id="icon" src="/img/icons/${data.list[3].weather[0].description}.png" alt="" />`;
  document.querySelector(
    ".weather-img5"
  ).innerHTML = ` <img id="icon" src="/img/icons/${data.list[4].weather[0].description}.png" alt="" />`;

  for (i = 0; i <= 5; i++) {
    updateTemp(data.list[i].main.temp, i);
  }
}

let isCelsius = true;

const updateTemp = (tempInCelsius, index) => {
  const tempElements = document.querySelectorAll(".tem");
  const tempElement = tempElements[index];
  if (isCelsius) {
    tempElement.innerHTML = tempInCelsius + "°C";
  } else {
    const tempInFahrenheit = (tempInCelsius * 9) / 5 + 32;
    tempElement.innerHTML = tempInFahrenheit.toFixed(2) + "°F";
  }
};

document.getElementById("check").addEventListener("click", () => {
  isCelsius = !isCelsius;
  fetchData();
});

fetchData();
