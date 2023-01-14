const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

modalClose.addEventListener('click', () => {
    modal.classList.remove("modal_active");
    setCookie("status", "close")
})
function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}
function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='))
    return cookie.substring(name.length + 1);

}
if (getCookie("status") == "close") {
    modal.classList.remove("modal_active");
}
