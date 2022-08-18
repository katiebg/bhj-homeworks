const menuItems = Array.from(document.querySelectorAll("ul.menu_main > li"));

let subMenuElements = [];

let menuSub;
for (let i = 0; i < menuItems.length; ++i) {
    menuItems[i].onclick = (event) => {
        subMenuElements[i] = Array.from(menuItems[i].querySelectorAll("ul.menu_sub > li"));
        if (subMenuElements[i].length > 0) {
            event.preventDefault();
            menuSub = menuItems[i].getElementsByClassName("menu_sub");
            if (menuSub.item(0).classList.contains("menu_active")){
                menuSub.item(0).classList.remove("menu_active");
            } else {
                menuSub.item(0).classList.add("menu_active");
            }
        }
    }
}

