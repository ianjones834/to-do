function getLists() {
  return JSON.parse(localStorage.getItem("lists"));
}

function getNames() {
  return JSON.parse(localStorage.getItem("names"));
}

function initializePage() {
  if (getLists() == null) {
    localStorage.setItem("lists", JSON.stringify([]));
  }

  if (getNames() == null) {
    localStorage.setItem("names", JSON.stringify([]));
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
  const names = getNames();

  const listName = prompt("Name your List or Leave Blank for no Name: ");
  console.log(!listName);

  if (!listName) {
    names.push("");
  }
  else {
    names.push(listName);
  }


  const body = document.getElementById("body");
  body.innerHTML += generateList(lists.length, names[names.length - 1]);

  lists.push([]);
  localStorage.setItem("lists", JSON.stringify(lists));
  localStorage.setItem("names", JSON.stringify(names));
}

function generateList(i, listName) {
  return `<input id="clear-${i}" type="submit" value="Clear List" onclick="clearList(${i})"/>
  <nobr>${listName}:</nobr>
  <input id="input-${i}" type="text" onkeydown="checkEnter(${i})"/><ul id="list-${i}"></ul>`

}