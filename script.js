let i = 0;
function addItem(){
    var title = document.getElementById("itemTitle").value;
    var textnode = document.createTextNode(title);
    var item = document.createElement("li");
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "X";
    item.id = "item" + i++;
    item.appendChild(removeBtn);
    item.appendChild(textnode);
    document.getElementById("list").appendChild(item);
}

function removeItem(){
    var item = document.getElementById("Item"+ i);
    item.remove();
    i--;
}