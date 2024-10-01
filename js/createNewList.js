const list = (list_name) => {
  return `
  <div id="${list_name}" class="col-md-4 text-center mb-3 list">
    <div class="h3">
      <span>${list_name}</span>
      <span id="delete${list_name}" style="color:red"><i class="fa-solid fa-trash"></i></span>
    </div>
    <div id="tasklist">
    </div>
    <span id="addtask" class="btn btn-success">Add New Task</span>
  </div>
  `;
}

function createNewList() {
  const list_name = displayNewListPopUp();

  $('#newlistbutton').parent().before(list(list_name));
  $(`#${list_name} #addtask`).on("click", () => {
    addNewTaskToList(`#${list_name}`);
  });
}