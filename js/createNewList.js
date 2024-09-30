const list = `
  <div id="list" class="col-md-4 text-center">
        <span class="col-2">hello</span>
        <span class="col-2 trash"><i class="fa-solid fa-trash"></i></span>
  </div>
  `;

function createNewList() {
  $('#listspace').prepend(list);
}