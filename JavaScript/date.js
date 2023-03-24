const d = new Date();

//Day of week
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekday[d.getDay()];
document.getElementById("dayOfWeek").innerHTML = day;

//Month
const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthList[d.getMonth()];
document.getElementById("month").innerHTML = month;

//Day
let day1 = d.getDate();
document.getElementById("day").innerHTML = day1 + ",";

//Year
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;