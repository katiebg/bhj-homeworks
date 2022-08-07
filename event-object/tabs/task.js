const tabs = document.getElementsByClassName("tab");
const tabContents = document.getElementsByClassName("tab__content");
let activeTab = Array.from(document.getElementsByClassName("tab_active"));
let activeContentTab = Array.from(document.getElementsByClassName("tab__content_active"));

for (let i = 0; i < tabs.length; i++) {
    tabs.item(i).onclick = () => {
        activeTab[0].classList.remove("tab_active");
        activeTab[0] = tabs.item(i);
        activeTab[0].classList.add("tab_active");
        activeContentTab[0].classList.remove("tab__content_active");
        activeContentTab[0] = tabContents.item(i);
        activeContentTab[0].classList.add("tab__content_active");
    }
}
