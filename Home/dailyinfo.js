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

if (month == "August" && day1 == "10") {
    document.getElementById("wordOfDay").innerHTML = "Declaration – a formal or explicit statement or announcement";
    document.getElementById("factOfDay").innerHTML = "The Declaration and Constitution were hidden  during World War II";
    document.getElementById("dayInHistory").innerHTML = "1776 - News reaches London that the Americans had drafted the Declaration of Independence";
}

//else if (month == "August" && day1 == "11") {
//    document.getElementById("wordOfDay").innerHTML = "Altitudinous - extending to a great distance upward";
//    document.getElementById("factOfDay").innerHTML = "The current tallest building in the world is the Burj Khalifa";
//    document.getElementById("dayInHistory").innerHTML = "1931 - The Empire State Building in New York City officially opened; for four decades it was the tallest building in the world, and it is considered a U.S. landmark.";
//}