const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", () => {
    const task = taskInput.value.trim();
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;

    if (task === "" || deadline === "") {
        alert("Please fill in the task and choose a valid future date.");
        return;
    }

    const selectedDate = new Date(deadline);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate <= currentDate) {
        alert("Please select an upcoming date for the deadline.");
        return;
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("task", priority.toLowerCase());

    const iconURL = 'https://cdn-icons-png.flaticon.com/512/3534/3534369.png';

    taskItem.innerHTML = `
        <img class="icon" src="${iconURL}" alt="task icon" />
        <div class="task-content">
            <p><strong>${task}</strong></p>
            <p>Priority: ${priority}</p>
            <p>Deadline: ${deadline}</p>
        </div>
        <button class="mark-done">Mark Done</button>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.closest(".task");
        taskItem.style.opacity = "0.7";
        event.target.disabled = true;
        event.target.textContent = "Completed";
    }
});
