const listContainer = document.getElementById("listContainer");
const taskTitle = document.getElementById("taskTitle");

function addTask(){
    if (taskTitle.value = ""){
        alert("Input value null");
    }
    else{
        let li = document.createElement("li");
        let.innerHTML = taskTitle.value;
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    taskTitle.value = "";
    loadTask();
}

listContainer.addEventListener("click", taskFunctions(element));

function taskFunctions(element){
    if (element.target.tagName = "li"){
        element.target.classList.toggle("Checked");
        loadTask();
    }
    else if (element.taget.tagName = "span"){
        element.taget.remove();
        loadTask();
    }
}

function saveTask(){
    localStorage.setItem("taskList",listContainer.innerHTML);
}

function loadTask(){
    listContainer.innerHTML = localStorage.getItem("taskList");
}

loadTask();