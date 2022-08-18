let arrowRight = [...document.getElementsByClassName('slider__arrow slider__arrow_next')][0];
let arrowLeft = [...document.getElementsByClassName('slider__arrow slider__arrow_prev')][0];
let slides = Array.from(document.querySelectorAll("div.slider__items > div"));

function changeSlideleft () {
    let idxActiveSlide = slides.findIndex((element, idx) => element.classList.contains("slider__item_active"));
    slides[idxActiveSlide].classList.remove("slider__item_active");
    if (idxActiveSlide === 0) {
        slides[slides.length - 1].classList.add("slider__item_active");
    } else {
        slides[idxActiveSlide - 1].classList.add("slider__item_active");
    }
}
function changeSlideRight () {
    let idxActiveSlide = slides.findIndex((element, idx) => element.classList.contains("slider__item_active"));
    slides[idxActiveSlide].classList.remove("slider__item_active");
    if (idxActiveSlide === (slides.length - 1)) {
        slides[0].classList.add("slider__item_active");
    } else {
        slides[idxActiveSlide + 1].classList.add("slider__item_active");
    }
}

arrowRight.addEventListener('click', changeSlideRight);

arrowLeft.addEventListener('click', changeSlideleft)
