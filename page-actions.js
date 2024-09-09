function getList(listName) {
  return JSON.parse(localStorage.getItem(listName));
}

function getNames() {
  return JSON.parse(localStorage.getItem("names"));
}

function initializePage() {
  if (getNames() == null) {
    localStorage.setItem("names", JSON.stringify([]));
  }

  document.getElementById("add-list").addEventListener("click", addList);

  initializeLists();
}

function initializeLists() {
  const names = getNames();

  for (listName of names) {
    initializeList(listName);
  }
}

function addList() {
  const names = getNames();

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

  localStorage.setItem(listName, JSON.stringify([]));
  localStorage.setItem("names", JSON.stringify(names));
}

function generateList(listName) {
  return `<div id="list-${listName}"><span style="">
  <img
    id="clear-${listName}"
    src="icons/delete.png"
    onclick="deleteList('${listName}')"
  />
  <nobr>${listName}:</nobr>
  <input
    id="input-${listName}"
    type="text"
    onkeydown="checkEnter('${listName}')"
  /></span>
  <ul id="tasks-${listName}"></ul></div>`
}