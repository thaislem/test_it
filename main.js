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
    document.getElementById("mounth").innerHTML = d.getMonth() + 1;
}
function showYear() {
    const d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();
}

var daysLeft = document.getElementById("days__left");
var hoursleft = document.getElementById("hours__left");
var minuteleft = document.getElementById("minute__left");
var secondleft = document.getElementById("second__left");
var countDownDate =new Date("January 21 2023 23:59:59").getTime();

function dateDiffFs() {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let day = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) ;
    let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((dateDiff % (1000 * 60)) / (1000));
    daysLeft.innerHTML = day;
    hoursleft.innerHTML = hour;
    minuteleft.innerHTML = minute;
    secondleft.innerHTML = second;
    
    if(dateDiff == 0){
        clearInterval(counter);
    }
}


setInterval(dateDiffFs, 1000)
setInterval(showTime, 1000);
showDate();
showMounth();
showYear();

 