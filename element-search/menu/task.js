const menuItems = Array.from(document.querySelectorAll("ul.menu_main > li"));

let subMenuElements = [];

let menuSub;
for (let i = 0; i < menuItems.length; ++i) {
    menuItems[i].onclick = () => {
        subMenuElements[i] = Array.from(menuItems[i].querySelectorAll("ul.menu_sub > li"));
        if (subMenuElements[i].length > 0) {
            event.preventDefault();
            menuSub = menuItems[i].getElementsByClassName("menu_sub");
            menuSub.classList.add("menu_active");
        }
    }
}
