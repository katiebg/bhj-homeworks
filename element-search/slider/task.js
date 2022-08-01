const arrowRight = document.getElementsByClassName("slider__arrow_next");
const arrowLeft = document.getElementsByClassName("slider__arrow_prev");
let slides = Array.from(document.querySelectorAll("div.slider__items > div"));

function changeSlide (side) {
    let idxActiveSlide = slides.findIndex((element,idx ) => element.classList.contains("slider__item_active"));
    slides[idxActiveSlide].classList.remove("slider__item_active");
    if (side === "left") {
        if (idxActiveSlide === 0) {
            slides[slides.length - 1].classList.add("slider__item_active");
        } else {
            slides[idxActiveSlide - 1].classList.add("slider__item_active");
        }
    }
    if (side === "right") {
        if (idxActiveSlide === (slides.length - 1)) {
            slides[0].classList.add("slider__item_active");
        } else {
            slides[idxActiveSlide + 1].classList.add("slider__item_active");
        }
    }
}

arrowLeft.onclick = changeSlide("left");
arrowRight.onclick = changeSlide("right");