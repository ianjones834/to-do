function getLists() {
  return JSON.parse(localStorage.getItem("lists"));
}

function initializePage() {
  if (getLists() == null) {
    localStorage.setItem("lists", JSON.stringify([]));
  }

  document.getElementById("add-list").addEventListener("click", addList);

  initializeLists();
}

function initializeLists() {
  const lists = getLists();

  for (i in lists) {
    initializeList(i);
  }
}

function addList() {
  const lists = getLists();

  const body = document.getElementById("body");
  body.innerHTML += generateList(lists.length);

  lists.push([]);
  localStorage.setItem("lists", JSON.stringify(lists));
}

function generateList(i) {
  return `<input id="clear-${i}" type="submit" value="Clear List" onclick="clearList(${i})"/>
  <input id="input-${i}" type="text" onkeydown="checkEnter(${i})"/><ul id="list-${i}"></ul>`

}