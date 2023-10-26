{
    const tasks = [

    ]

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    }

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;

        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }

    const render = () => {
        let htmlString = '';

        for (const task of tasks) {
            htmlString += `
                <li
                class="container__listItem"
                >
                <div class="container__gridElement">
                    <button class="${task.done ? "container__listButton--done " : ""} container__listButton js-done">
                        <i class="material-icons">check</i>
                    </button>
                </div>
                <div class="container__gridElement">
                    <p class="${task.done ? "container__listTask--done" : ""}">
                        ${task.content}
                    </p>
                </div>
                <div class="container__gridElement">
                    <button class="container__listButton--remove container__listButton js-remove">
                        <i class="material-icons">delete</i>
                    </button>
                </div>
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        document.querySelector(".js-newTask").focus();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);

        document.querySelector(".js-newTask").value = "";
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}