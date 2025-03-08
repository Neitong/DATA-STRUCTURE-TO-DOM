let tasks = [
    { id: 1, title: "Task 1", priority: 0 },
    { id: 2, title: "Task 2", priority: 1 },
    { id: 3, title: "Task 3", priority: 0 },
    { id: 4, title: "Task 4", priority: 1 },
    { id: 5, title: "Task 5", priority: 0 },
    // Add more tasks here
];

function showTask() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear the container

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task border p-2 mb-2 rounded text-center';
        taskDiv.style.backgroundColor = task.priority === 0 ? 'gray' : 'red';
        taskDiv.innerHTML = `
            <h5>${task.title}</h5>
        `;
        container.appendChild(taskDiv);
    });
}

// Call the function to display tasks when the script loads
document.addEventListener('DOMContentLoaded', showTask);