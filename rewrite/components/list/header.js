function generateListHeader(listName) {
  const divHeader = document.createElement("div");
  divHeader.classList.add(`listHeader-${listName}`);

  divHeader.appendChild(generateListDeleteIcon(listName));
  divHeader.appendChild(generateListTitle(listName));

  return divHeader;
}

function generateListTitle(listName) {
  const title = document.createElement("span");
  title.innerText = listName;

  return title;
}