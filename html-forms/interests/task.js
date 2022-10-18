const interest = document.querySelectorAll('input');
let child, checkboxButton;

interest.forEach((element) => element.addEventListener("change", () => 
{
    let container = element.parentElement.parentElement.querySelectorAll("ul");
    child = container.item(0).children
    for (let i = 0; i<child.length; i++){
        checkboxButton = child.item(i).children;
        if (element.checked === true){
            checkboxButton.item(0).querySelector("input").checked = true;
        } else {
            checkboxButton.item(0).querySelector("input").checked = false;
        }
    }
}
))
