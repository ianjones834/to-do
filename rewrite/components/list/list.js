function createAndAddList(listName) {
  const body = getElementById("body");
  const listHtml = generateList(listName);

  body.appendChild(listHtml);
}

function generateList(listName) {
  return generateListDiv(listName);
}

function generateListDiv(listName) {
  const div = document.createElement("div", {id: `list-${listName}`});

  div.appendChild(generateListHeader(listName));
  div.appendChild(generateListTasks(listName));
  div.appendChild(generateListInput(listName));

  return div;
}