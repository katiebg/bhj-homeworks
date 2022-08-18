let bookControls = document.querySelectorAll(".font-size");
let bookContent = document.querySelectorAll(".book__content");
let activeControls = document.querySelectorAll('.font-size_active');
for (let el of bookControls) {
    el.addEventListener("click", () => {
        if (el.classList.contains('font-size_small')) {
            activeControls.classList.remove('font-size_active');
            bookContent.item(0).className = "book__content";
            bookContent.item(0).classList.add("book_fs-small");
            activeControls = el;
            activeControls.classList.add('font-size_active');
        } else if (el.classList.contains('font-size_big')) {
            activeControls.classList.remove('font-size_active');
            bookContent.item(0).className = "book__content";
            bookContent.item(0).classList.add("book_fs-big");
            activeControls = el;
            activeControls.classList.add('font-size_active');
        } else {
            activeControls.classList.remove('font-size_active');
            bookContent.item(0).className = "book__content";
            activeControls = el;
            activeControls.classList.add('font-size_active');
        }


    })
}