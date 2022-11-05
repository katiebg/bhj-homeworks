const hasTooltip = document.querySelectorAll(".has-tooltip");
hasTooltip.forEach((el, idx) => el.addEventListener("click", (e, el, idx) => {
    e.preventDefault();
    e.target.insertAdjacentHTML("afterend", `<div class="tooltip tooltip_active">${e.target.title}</div>`)
    

}))
console.log(hasTooltip);


