function generateTask(listName, t, input, date) {
  if (date !== null && date !== "") {
    date = date.substring(5);
    date = date.replaceAll("0","");
    date = date.replaceAll("-","/");

    return `<li id="task-${listName}-${t}" onclick="removeTaskFromList('${listName}', ${t})">${input} (${date})</li>`
  }

  return `<li id="task-${listName}-${t}" onclick="removeTaskFromList('${listName}', ${t})">${input} </li>`
}

function initializeList(listName) {
  const body = document.getElementById("body");

  body.innerHTML += generateList(listName);

  const taskList = getList(listName);

  taskList.sort((a, b) => a.date.localeCompare(b.date));


  for (t in taskList) {
    const unorderedList = document.getElementById(`tasks-${listName}`)
    unorderedList.innerHTML += generateTask(listName, t, taskList[t].task, taskList[t].date);
  }


  save();
}

function checkEnter(listName) {
  if (event.key === "Enter") {
    addTaskToList(listName);
  }
}

function addTaskToList(listName) {
  const list = getList(listName);
  const input = document.getElementById(`input-${listName}`);
  const date = document.getElementById(`date-${listName}`);

  if (input.value === "") {
    return;
  }

  let inputString = input.value;

  inputString = inputString.replaceAll("<", "&lt;");
  inputString = inputString.replaceAll(">", "&gt;");

  list.push({task: inputString, date: document.getElementById(`date-${listName}`).value});
  lists[listName] = list;
  input.value = "";
  date.value ="";

  save();
  location.reload();
}

function deleteList(listName) {
  const image = document.getElementById(`clear-${listName}`);
  image.src = "icons/delete-red.png";

  if (confirm("Are you sure?")) {
    const i = names.findIndex(x => x === listName);
    names.splice(i, 1);

    delete lists[listName];
    document.getElementById(`list-${listName}`).remove();
  }
  image.src = "icons/delete.png";

  save();
}