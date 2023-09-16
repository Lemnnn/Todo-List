const addTask = () => {
  const task = document.getElementById("input").value;
  const list = document.getElementById("taskList");
  const taskItem = document.createElement("li");
  taskItem.innerHTML = task;

  list.appendChild(taskItem);
};
