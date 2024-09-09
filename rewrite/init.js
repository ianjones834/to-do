if (getState() == null) {
  localStorage.setItem("state", JSON.stringify({names: [], lists: {}}));
}

const state = getState();
const lists = state.lists;
const names = state.names;

window.onbeforeunload = function () {
  localStorage.setItem("state", JSON.stringify(state));
}

initializeLists();

function initializeLists() {
  for (listName of names) {
    initializeList(listName);
  }
}