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
}