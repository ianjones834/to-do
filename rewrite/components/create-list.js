function addList() {
  const listName = validateListName();
  createAndAddList(listName);
}


function validateListName() {
  listName = prompt("Name your List: ");

  if (!listName) {
    return;
  }

  while (names.includes(listName)) {
    listName = prompt("List name already exists. Please choose a different name: ");
  }

  return listName;
}