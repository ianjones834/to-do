if (getNames() == null) {
  localStorage.setItem("names", JSON.stringify([]));
}

if (getLists() == null) {
  localStorage.setItem("lists", JSON.stringify({}));
}

const names = getNames();
const lists = getLists();

document.getElementById("add-list").addEventListener("click", addList);

window.onbeforeunload = function () {
  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("lists", JSON.stringify(lists));
}

initializeLists();

function getLists() {
  return JSON.parse(localStorage.getItem("lists"));
}

function getList(listName) {
  return lists[listName];
}

function getNames() {
  return JSON.parse(localStorage.getItem("names"));
}

function initializeLists() {
  for (listName of names) {
    initializeList(listName);
  }
}

function addList() {
  let listName = prompt("Name your List: ");

  while (true) {
    if (!listName) {
      return;
    }
    else if (names.includes(listName)) {
      listName = prompt("List name already exists. Please choose a different name: ");
    }
    else {
      break;
    }
  }

  const body = document.getElementById("body");
  body.innerHTML += generateList(listName);
  names.push(listName);
  lists[listName] = [];

  save();
}

function generateList(listName) {
  return `<div id="list-${listName}"><span style="">
  <img
    id="clear-${listName}"
    src="icons/delete.png"
    onclick="deleteList('${listName}')"
  />
  <nobr>${listName}:</nobr></span>
   <ul id="tasks-${listName}"></ul>
  <input
    id="input-${listName}"
    type="text"
    onkeydown="checkEnter('${listName}')"
  /></div>`;
}

function save() {
  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("lists", JSON.stringify(lists));
}