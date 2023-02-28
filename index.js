let taskInput = document.getElementById("task");
let list = document.getElementById("list");

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task.");
    return false;
  }

  let li = document.createElement("li");
  let taskText = document.createTextNode(taskInput.value);
  li.appendChild(taskText);
  list.appendChild(li);
  taskInput.value = "";

  let deleteButton = document.createElement("button");
  let deleteText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteText);
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    li.remove();
  });
}
