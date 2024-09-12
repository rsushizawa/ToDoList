var listContainer = document.getElementById("listContainer");
var taskTitle = document.getElementById("taskTitle");

function addTask(){
    if (taskTitle.value === ""){
        alert("Input value null");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskTitle.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskTitle.value = "";
    saveTask();
}

function taskFunctions(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("Checked");
        saveTask();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}

function saveTask(){
    localStorage.setItem("taskList",listContainer.innerHTML);
}

function loadTask(){
    listContainer.innerHTML = localStorage.getItem("taskList");
}

function clearTasks(){
    localStorage.clear("taskList");
    loadTask();
}

listContainer.addEventListener('click', taskFunctions);

loadTask();