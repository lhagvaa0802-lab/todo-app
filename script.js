const inputBox = document.querySelector(".input-group input");
const addBtn = document.querySelector(".input-group button");
const taskList = document.querySelector("#task-list");
const taskDelete = document.getElementById("task-delete");
const emptyMessage = document.getElementById("emptyMessage");

let tasks = [];

let tasId = 1;

const add = () => {
  const taskText = inputBox.value;
  const task = {
    id: tasId,
    text: taskText,
    isCompleted: false,
  };
  tasks.push(task);
  tasId++;
  clearText();
  clearInput();
  renderTasks(tasks);
};

const renderTasks = (taskArr) => {
  let taskItems = "";

  taskArr.forEach((task) => {
    const taskItem = createTaskItem(task);
    taskItems += taskItem;
  });

  taskList.innerHTML = taskItems;
};

const createTaskItem = (task) => {
  return `
        <div class="task-list-item">
           <div class="task-item-left">
             <input type="checkbox" id="${task.id}" ${
    task.isCompleted && "checked"
  } onchange="updateTask(${task.id})"/> 
            <p class="task-text ${task.isCompleted && "completed"}">${
    task.text
  }</p>
            </div>
            <button id="task-delete" class='delete_btn ${
              task.isCompleted && "show_delete"
            }' onclick="deleteBtn(${task.id})">Delete</button>
        </div>`;
};

const updateTask = (id) => {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, isCompleted: !task.isCompleted };
    } else {
      return task;
    }
  });

  tasks = updatedTasks;

  renderTasks(updatedTasks);
};

const clearInput = () => {
  inputBox.value = "";
};
let clearText = () => {
  emptyMessage.innerHTML = "";
};
const deleteBtn = (taskId) => {
  const updatedTasks = tasks.filter((task) => {
    if (task.id === taskId) {
      return false;
    } else {
      return true;
    }
  });

  tasks = updatedTasks;

  renderTasks(updatedTasks);
};

addBtn.addEventListener("click", add);
