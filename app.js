let tasks = [{
  text:'none',
  done:false,
}]

function deleteTask(){

}

// gets the input value

function taskInput(){
  const input = document.getElementById('TaskInput');

  const task = {text:input.value,done:false};

  tasks.push(task);

  return task;

}

// Adds task to the page
function addTask(task){
  const parent = document.getElementById('Container');

  const Row = document.createElement('tr');

  parent.appendChild(Row);

  const Task = document.createElement('td');
  
  Row.appendChild(Task);

  const TaskCheck = document.createElement('input');

  TaskCheck.setAttribute('type','checkbox');
  TaskCheck.classList.add('mr-2');

  if(task.done)
  TaskCheck.setAttribute('checked','checked');

  Task.appendChild(TaskCheck);

  const TaskLabel = document.createElement('label');
  TaskLabel.textContent=task.text;
  
  Task.appendChild(TaskLabel);

  const del = document.createElement('td');
  
  Row.appendChild(del);

  const deleteButton = document.createElement('button');

  deleteButton.classList.add('bg-transparent','text-red-500');

  deleteButton.textContent = 'Delete';

  deleteButton.addEventListener('click',()=>{
    const parent = Row;

    const body = document.getElementById('Container');

    body.removeChild(parent);
    // add index to remove
    const index = tasks.findIndex(task => task.text === TaskLabel.textContent);
      tasks.splice(index, 1);
      console.log(index);
  

  })

  del.appendChild(deleteButton);

}

function showTasks(){
  tasks.forEach((task)=>{
    addTask(task);
  })
}

// creating event listener on Add Button

const addButton = document.getElementById('Add');

function DeleteEvent(btn){

      addEventListener('click',()=>{

      })
}

addButton.addEventListener('click',()=>{

  const task = taskInput();

  addTask(task);

});

showTasks();

//const deleteButton = document.getElementById('delete');

//button.addEventListener('click',()=>{

//})

// 
