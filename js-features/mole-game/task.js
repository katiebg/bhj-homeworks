const holes = [document.getElementById("hole1"), document.getElementById("hole2"), document.getElementById("hole3"), document.getElementById("hole4"),
document.getElementById("hole5"),document.getElementById("hole6"), document.getElementById("hole7"), document.getElementById("hole8"), document.getElementById("hole9")];
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
for (let i = 0; i < 9; i++) {
    holes[i].onclick = function checkHole() {
        if (holes[i].className.includes( 'hole_has-mole' )) {
            dead.textContent++;
            if (dead.textContent == 10) {
                alert("Вы выиграли!");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            lost.textContent++;
            if (lost.textContent == 5) {
                alert("Вы проиграли!");
                dead.textContent = 0;
                lost.textContent = 0;
            }

        }

    }
}