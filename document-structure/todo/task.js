const tasksInput = document.querySelector(".tasks__input")
const tasksList = document.querySelector(".tasks__list");
const addtask = document.querySelector(".tasks__add");
let dataId = 1;
addtask.addEventListener("click", (e) => {
    e.preventDefault();
})
tasksInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
        textTask = tasksInput.value;
        e.preventDefault();
        if (textTask != "") {
            tasksList.innerHTML += `
                <div class="task">
                    <div class="task__title">
                        ${textTask}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>
            `;
            tasksInput.value = "";
        }
    }
    tasksList.querySelectorAll(".task").forEach((item) => {
            item.querySelector(".task__remove").addEventListener("click", () => {
                item.remove();
            })
    })
})

