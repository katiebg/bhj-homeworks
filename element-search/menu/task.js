const menuItems = Array.from(document.querySelectorAll("ul.menu_main > li"));

let subMenuElements = [];

let menuSub;
for (let i = 0; i < menuItems.length; ++i) {
    menuItems[i].onclick = (event) => {
        subMenuElements[i] = Array.from(menuItems[i].querySelectorAll("ul.menu_sub > li"));
        if (subMenuElements[i].length > 0) {
            menuSub = menuItems[i].getElementsByClassName("menu_sub");
            if (!event.target.getAttribute('href')) {
                event.preventDefault();
            }           
            if (menuSub.item(0).classList.contains("menu_active")){
                menuSub.item(0).classList.toggle("menu_active");
            } else {
                menuSub.item(0).classList.toggle("menu_active");
            }
        }
    }
}

