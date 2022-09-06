let rotatorCase = document.querySelectorAll(".rotator__case");
let activeCase = document.querySelector(".rotator__case_active");
let delay = 1000;

let timerId = setTimeout(function request() {
    if (activeCase.nextElementSibling) {
        activeCase.classList.remove("rotator__case_active");
        activeCase = activeCase.nextElementSibling;
        activeCase.classList.add("rotator__case_active");
    } else {
        activeCase.classList.remove("rotator__case_active");
        activeCase = rotatorCase.item(0);
        activeCase.classList.add("rotator__case_active");
    }
    activeCase.style.color = activeCase.getAttribute('data-color');
    delay = activeCase.getAttribute('data-speed');

    timerId = setTimeout(request, delay );
  
  }, delay );