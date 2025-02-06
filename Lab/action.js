let tasks = [];
function addTask() {
    let taskInput = document.getElementById("task").value;
    let priority = document.getElementById("priority").value === "High" ? 1 : 0;
            
    if (taskInput.trim() === "") return;
    
            
    tasks.push({ description: taskInput, priority: priority });
    document.getElementById("task").value = "";
    renderTasks();
    console.log(tasks);
}

function renderTasks(filter = "all") {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
            
    let filteredTasks = tasks.filter(task => {
        if (filter === "important") return task.priority === 1;
        if (filter === "not-important") return task.priority === 0;
        return true;
    });
            
    filteredTasks.forEach(task => {
        let taskItem = document.createElement("button");
        taskItem.textContent = task.description;
        taskItem.classList.add("btn", "w-100", "mb-2");
                
        if (task.priority === 1) {
            taskItem.classList.add("btn-danger");
        } else {
            taskItem.classList.add("btn-secondary");
        }
                
            taskList.appendChild(taskItem);
    });
}