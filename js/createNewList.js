let cur_count = 1;

const list = (list_name, num) => {
  return `
  <div id="list${num}" class="col-md-4 text-center mb-3">
    <div class="h3">
      <span>${list_name}</span>
      <span style="color:red"><i class="fa-solid fa-trash"></i></span>
    </div>
    <div id="tasklist">

    </div>
    <span id="addtask" class="btn btn-success">Add New Task</span>
  </div>

  <script>
    $("#list${num} #addtask").click(() => {
      console.log("listening");
      addNewTaskToList("#list${num}");
    });
  </script>
  `;
}

function createNewList() {
  $('#newlistbutton').parent().before(list(`New List ${cur_count}`, cur_count++));
}