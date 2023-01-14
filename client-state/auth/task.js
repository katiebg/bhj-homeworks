if (localStorage.getItem("user_id")) {
    changeUser(localStorage.getItem("user_id"))
}

document.forms.signin__form.addEventListener("submit", (e) => {
    
    const formData = new FormData(document.forms.signin__form);
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    xhr.responseType = 'json';
    xhr.onload = () => {

        if (!xhr.response.success) {
            alert("Неверный логин/пароль");
        } else {
            changeUser(xhr.response.user_id); 
            localStorage.setItem("user_id", `${xhr.response.user_id}`);
        };
    };
    xhr.send(formData);

    e.preventDefault();
});

function changeUser (idUser) {
    document.querySelector("#user_id").textContent = idUser;
    document.querySelector(".welcome").classList.add("welcome_active");
    document.querySelector(".signin").classList.remove("signin_active");

}
