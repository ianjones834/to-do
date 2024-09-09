function getState() {
  return JSON.parse(localStorage.getItem("state"));
}

function getList(listName) {
  return lists[listName];
}

function getName(i) {
  return names[i];
}

function getElementById(id) {
  return document.getElementById(id);
}

