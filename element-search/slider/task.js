const arrowRight = document.getElementsByClassName("slider__arrow_next");
const arrowLeft = document.getElementsByClassName("slider__arrow_prev");


let slides = Array.from(document.querySelectorAll("div.slider__items > div"));
let activeSlide = slides[0];
arrowRight.onclick = slideNext;

function slideNext() {
    for (let i = 0; i < 5; i++) {
        if (slides[i] === activeSlide) {
            if (i === 4) {
                slides[i].classList.remove("slider__item_active");
                activeSlide = slides[0];
                slides[0].classList.add("slider__item_active");
            } else {
                slides[i].classList.remove("slider__item_active");
                activeSlide = slides[i + 1];
                slides[i + 1].classList.add("slider__item_active");
            }
        }
    }
}

function slidePrev() {
    for (let i = 0; i < 5; i++) {
        if (slides[i] === activeSlide) {
            if (i === 0) {
                slides[i].classList.remove("slider__item_active");
                activeSlide = slides[4];
                slides[4].classList.add("slider__item_active");
            } else {
                slides[i].classList.remove("slider__item_active");
                activeSlide = slides[i - 1];
                slides[i - 1].classList.add("slider__item_active");
            }
        }
    }
}


