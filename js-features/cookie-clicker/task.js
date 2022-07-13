let counter = document.getElementById("clicker__counter")
let cookie = document.getElementById("cookie"); 
let speed = document.getElementById("clicker__speed");
let time1 = Date.now(); 
cookie.onclick = function () {
    time2 = Date.now();
    counter.textContent++;
    cookie.width = 150;
    setTimeout(() => {cookie.width = 200}, 100);
    speed.textContent = (1/((time2 - time1)/1000)).toFixed(2);
    time1 = Date.now();
}