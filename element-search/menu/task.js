const menuItems = Array.from(document.querySelectorAll("ul.menu_main > li"));

let subMenuElements;
for (let i = 0; i < menuItems.length; ++i) {
    subMenuElements = menuItems[i].querySelectorAll("ul. menu_sub > li");
    if (subMenuElements) {
        event.preventDefault(); 
        subMenuElements.classList.add("menu_active");
    }
}
