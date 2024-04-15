//This is Date.js

const displayCurrentDate = () => {
  // Create a new Date object
  var currentDate = new Date();

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current date, month, and year
  var day = currentDate.getDate();
  var monthIndex = currentDate.getMonth(); // 0-based index
  var year = currentDate.getFullYear();
  var dayIndex = currentDate.getDay();

  // Format the date as needed
  var formattedDate =
    monthNames[monthIndex] + " " + day + " " + dayNames[dayIndex];

  // Display the current date

  document.querySelector(".curr-date").innerHTML = formattedDate;
};

displayCurrentDate();

// Format the time nicely

const updatedTime = () => {
  //  Create a new Date object
  var currentTime = new Date();

  // Extract hours, minutes, and seconds
  let hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  hours = hours % 12 || 12;
  let meridiem = hours < 12 ? "pm" : "am";
  var formattedTime =
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    " " +
    meridiem;
  document.getElementById("current-time").innerHTML = formattedTime;
};

updatedTime();

setInterval(updatedTime, 1000);
