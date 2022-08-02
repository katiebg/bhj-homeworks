const menu = document.getElementsByClassName("dropdown__value");
const menuList = document.getElementsByClassName("dropdown__list");

function clickMenu() {
    if (menuList.item(0).classList.contains("dropdown__list_active")) {
        menuList.item(0).classList.remove("dropdown__list_active");
    } else {
        menuList.item(0).classList.add("dropdown__list_active");
    }
}

menu.item(0).addEventListener("click", clickMenu);

const listItems = menuList.item(0).getElementsByClassName("dropdown__link");
let textContItem;

for (let i = 0; i<listItems.length; i++){
    listItems.item(i).onclick = (event) => {
        textContItem = listItems.item(i).textContent;
        menuList.item(0).classList.remove("dropdown__list_active");
        menu.item(0).textContent = textContItem;
        event.preventDefault();
    }
}

