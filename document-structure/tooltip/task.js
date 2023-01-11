const hasTooltip = document.querySelectorAll(".has-tooltip");
hasTooltip.forEach((el) => {
    const location = { left, bottom } = el.getBoundingClientRect();
    let elem = `<div class="tooltip" style="position:absolute; top:${location.bottom + 5}px; left:${location.left}px"> ${el.title} </div>`;
    el.insertAdjacentHTML("afterend", elem);
})
hasTooltip.forEach((el) => el.addEventListener("click", (e) => {
    e.preventDefault();
    if (el.nextElementSibling.classList.contains("tooltip_active")) {
        el.nextElementSibling.classList.remove("tooltip_active");
    }
    else {
        el.nextElementSibling.classList.add("tooltip_active");
    }
}))





