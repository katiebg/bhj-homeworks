const editor = document.querySelector("#editor");
editor.value = localStorage.getItem("Text");
editor.addEventListener("keyup", () => {
    localStorage.setItem("Text", editor.value)
})