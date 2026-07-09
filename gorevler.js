const tasks = [];

const addBtn = document.getElementById("addTaskButton");
const input = document.getElementById("addTaskButtonInput");
const container = document.getElementById("taskContainer");

const template = document.querySelector(".task");
template.remove();

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;

    tasks.push(text);
    showTask(text);
    input.value = "";
});

function showTask(text) {
    const task = template.cloneNode(true);
    task.querySelector(".taskText").textContent = text;

    task.querySelector(".deleteBtn").onclick = () => task.remove();

    container.appendChild(task);
}