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

if (month == "August" && day1 == "11") {
    document.getElementById("wordOfDay").innerHTML = "Debouch – emerge from a narrow or confined space into a wide, open area.";
    document.getElementById("factOfDay").innerHTML = "In the 2019 regular season, the average baseball game lasted for 3 hours, 5 minutes, 35 seconds.";
    document.getElementById("dayInHistory").innerHTML = "1929 - New York Yankees hitter Babe Ruth becomes the first MLB player to hit 500 home runs in a 6-5 loss to Cleveland";
}