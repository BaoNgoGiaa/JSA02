const button = document.getElementById("button");
let tasks = [];
button.addEventListener("click", (e) => {
  e.preventDefault();
  let task = {
    taskName: document.getElementById("input").value,
    isDOne: false
  };
   task.push(task);
   localStorage.setItem("tasks",JSON.stringify(task));
   render();
});
  
function render() {
    let todo = document.getElementById('todo');
    todo.innerHTML= null ;
    let taskFromLocal = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i< taskFromLocal.lenght;i++){
        console.log(tasksFromLocal[i]);
        let li = document.createElement('li')
        li.innerHTML= taskFromLocal[i].taskName;todo.appendChild(li);
    }
}