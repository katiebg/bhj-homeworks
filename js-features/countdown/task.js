    let timer = document.getElementById('timer');
const changeTimer = function () {
    if (timer.textContent != 0){
        timer.textContent--;
    } else {
        clearInterval(intervalId);
        location.assign ("https://github.com/katiebg/bhj-homeworks/archive/refs/heads/master.zip");
    }
}

let intervalId = setInterval(changeTimer, 1000);


