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
        li.appendChild(span);x
    }
    taskTitle.value = "";
    saveTask();
}

listContainer.addEventListener("onclick", taskFunctions(e));

function taskFunctions(e){
    if (e.target.tagName === "li"){
        e.target.classList.toggle("Checked");
        saveTask();
    }
    else if (e.taget.tagName === "span"){
        e.taget.parentElement.remove();
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

loadTask();