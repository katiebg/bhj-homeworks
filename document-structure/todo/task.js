const tasksInput = document.querySelector(".tasks__input")
const tasksList = document.querySelector(".tasks__list");
const addtask = document.querySelector(".tasks__add");
addtask.addEventListener("click", (e) => {
    e.preventDefault();
    textTask = tasksInput.value;
    if (textTask.trim() !== "") {
        tasksList.insertAdjacentHTML ("afterbegin", `
                <div class="task">
                    <div class="task__title">
                        ${textTask}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>`);
        tasksInput.value = "";
    }
    tasksList.querySelectorAll(".task").forEach((item) => {
        item.querySelector(".task__remove").addEventListener("click", () => {
            item.remove();
        })
    })
})

