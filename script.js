const inputBox = document.querySelector(".input-group input");
const addBtn = document.querySelector(".input-group button");
const taskList = document.querySelector("#task-list");
const checkBoxes = document.querySelector(".checkbox");



const tasks =[]

let tasId =1

const add =()=>{
    const taskText = inputBox.value
    const task ={
        id: tasId,
        text: taskText,
        isCompleted: false}
    tasks.push(task)
    tasId++
    clearInput()
    renderTasks()
    
   
}
const renderTasks =()=>{
 let taskItems = ""
 tasks.forEach((task)=> {
    const taskItem = createTaskItem(task)
    taskItems += taskItem
    });
    
    taskList.innerHTML = taskItems

}

const createTaskItem =(task)=>{
    return `
        <div class="task-list-item">
           <div class="task-item-left">
             <input type="checkbox" class="checkbox" ${task.isCompleted} && "checked" /> 
            <p class="task-text">${task.text}</p>
            </div>
            <button class="task-delete">Delete</button>
        </div>
    `;
}
const clearInput =()=>{
    inputBox.value =""
}


checkBoxes.forEach((checkbox)=>{
    checkbox.addEventListener("change",mychecked);
})


    





addBtn.addEventListener("click", add)




