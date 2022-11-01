const tasksInput = document.querySelector(".tasks__input")
const tasksList = document.querySelector(".tasks__list");
tasksInput.addEventListener("keyup", (e) => {
    console.log(1)
    e.preventDefault();
    if (e.key == "Enter") {
        textTask = tasksInput.value;
        console.log(2)
        e.preventDefault();
        if (textTask != ""){
            console.log(4);
            tasksList.innerHTML += `
                <div class="task">
                    <div class="task__title">
                        ${textTask}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>
            `;
            tasksInput.value = ' ';
            console.log(3)
        }
    }
})

