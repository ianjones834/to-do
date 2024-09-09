function generateTask(listName, t, input) {
  return `<li id="task-${listName}-${t}" onclick="removeTaskFromList('${listName}', ${t})">${input} </li>`
}

function initializeList(listName) {
  const body = document.getElementById("body");

  body.innerHTML += generateList(listName);

  const taskList = getList(listName);

  for (t in taskList) {
    const unorderedList = document.getElementById(`tasks-${listName}`)
    unorderedList.innerHTML = generateTask(listName, t, taskList[t]) + unorderedList.innerHTML;
  }
}
function checkEnter(listName) {
  if (event.key === "Enter") {
    addTaskToList(listName);
  }
}

function addTaskToList(listName) {
  const list = getList(listName);
  const input = document.getElementById(`input-${listName}`);

  if (input.value === "") {
    return;
  }

  let inputString = input.value;

  inputString = inputString.replaceAll("<", "&lt;");
  inputString = inputString.replaceAll(">", "&gt;");

  const taskList = document.getElementById(`tasks-${listName}`);
  taskList.innerHTML = generateTask(listName, list.length, inputString) + taskList.innerHTML;

  list.push(inputString)
  localStorage.setItem(listName, JSON.stringify(list));
  input.value = "";
}

function deleteList(listName) {
  const image = document.getElementById(`clear-${listName}`);
  image.src = "icons/delete-red.png";

  if (confirm("Are you sure?")) {
    const names = getNames();

    const i = names.findIndex(x => x === listName);
    names.splice(i, 1);

    localStorage.removeItem(listName);
    localStorage.setItem("names", JSON.stringify(names));

    document.getElementById(`list-${listName}`).remove();
  }
  image.src = "icons/delete.png";
}