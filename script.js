function addItem(){
    const title = document.getElementById("itemTitle").value;
    const textnode = document.createTextNode(title);
    const item = document.createElement("li");
    item.appendChild(textnode)
    document.document.getElementById("list").appendChild(item);
}