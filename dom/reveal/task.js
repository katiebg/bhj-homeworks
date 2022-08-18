const reveal = document.querySelectorAll('.reveal');

function isVisible () {
    for ( let el of reveal) {
        let coordinates = { top, bottom } = el.getBoundingClientRect();
        if ((coordinates.top < window.innerHeight) && (bottom > 0)) {
            el.classList.add("reveal_active");
        } else {
            el.classList.remove("reveal_active");
        }
    }
}

window.addEventListener('scroll', isVisible)