function showTime() {
    const d = new Date();
    document.getElementById("hours").innerHTML = d.toLocaleTimeString();
}
function showDate() {
    const d = new Date();
    document.getElementById("date").innerHTML = d.getDate();
}
function showMounth() {
    const d = new Date();
    document.getElementById("mounth").innerHTML = d.getMonth();
}
function showYear() {
    const d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();
}
function daysLeft() {
    const d = new Date();
    const nam = 2023- d.getFullYear();
    const thang= 1- d.getMonth();
    const ngay =22- d.getDate();
    const daysLeft = nam*12*60 + thang*12 + ngay;
    document.getElementById("days__left").innerHTML = 29;
}


daysLeft();
setInterval(showTime, 1000);
showDate();
showMounth();
showYear();

 