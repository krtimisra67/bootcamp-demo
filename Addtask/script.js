// Select Elements
let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTask");
let taskList = document.getElementById("taskList");
let taskText=taskInput.value.trim; //To access everything in the element 
// Function to add a task
function addTask() {

    let li=document.createElement("li");
    li.textContent=taskText;
    taskList.appendChild(li);
    // take task text

    // Append task
    taskInput.value=""
    // Clear input
}

// Event Listener
addTaskButton.addEventListener("click", addTask);