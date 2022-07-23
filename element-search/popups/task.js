let modal = document.getElementsByClassName("modal");
let modalMain = document.getElementById("modal_main");
let Buttons = document.getElementsByClassName("modal__close");
let closeButton = Buttons.item(0);
let acceptButton = Buttons.item(1);
let successButton = Buttons.item(2);
let showSuccess = document.getElementsByClassName("show-success");
let modalSuccess = document.getElementById("modal_success");

modalMain.classList.add('modal_active');


closeButton.onclick = closeModal;

function closeModal() {
    modalMain.classList.remove('modal_active');
}

acceptButton.onclick = acceptModal;

successButton.onclick = closeSuccess;



function closeSuccess() {
    modalSuccess.classList.remove("modal_active");
}

function acceptModal() {
    closeModal();
    modalSuccess.classList.add("modal_active");
}
