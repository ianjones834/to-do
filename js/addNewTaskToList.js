const task = (num) => {
  return `
    <div>
      <span>New Task ${num}</span>
      <span id="deletetask${num}" style="color:red"><i class="fa-solid fa-trash"></i></span>
    </div>
  `
}

function addNewTaskToList(list) {
  $(`${list} #tasklist`).append(task(cur_task_counts));
  $(`${list} #deletetask${cur_task_counts}`).on("click", () => {
    deleteTask(cur_task_counts++);
  });
}