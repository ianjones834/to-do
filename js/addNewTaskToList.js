let cur_task_counts =1;

const task = (num) => {
  return `
    <div>
      <span>New Task ${num}</span>
      <span style="color:red"><i class="fa-solid fa-trash"></i></span>
    </div>
  `
}

function addNewTaskToList(list) {
  console.log($(`${list} > #tasklist`))
  $(`${list} #tasklist`).append(task(cur_task_counts++));
}