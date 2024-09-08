function generateTask(i, t, input) {
  return `<li id="task-${i}-${t}" onclick="removeTaskFromList(${i}, ${t})">${input} </li>`
}

function initializeList(i) {
  const lists = getLists();
  const names = getNames();

  const body = document.getElementById("body");

  body.innerHTML += generateList(i, names[i]);

  const taskList = lists[i];

  for (t in taskList) {
    const unorderedList = document.getElementById(`list-${i}`)
    unorderedList.innerHTML = generateTask(i, t, taskList[t]) + unorderedList.innerHTML;
  }
}

function checkEnter(i) {
  if (event.key === "Enter") {
    addTaskToList(i);
  }
}

function addTaskToList(i) {
  const lists = getLists();

  const input = document.getElementById(`input-${i}`);



  if (input.value === "") {
    return;
  }

  let inputString = input.value;

  inputString = inputString.replaceAll("<", "&lt;");
  inputString = inputString.replaceAll(">", "&gt;");

  const taskList = document.getElementById(`list-${i}`);
  taskList.innerHTML = generateTask(i, lists[i].length, inputString) + taskList.innerHTML;

  lists[i].push(inputString)

  localStorage.setItem("lists", JSON.stringify(lists));

  input.value = "";
}

function deleteList(i) {
  if (confirm("Are you sure?")) {
    const lists = getLists();
    const names = getNames();

    lists.splice(i, 1);
    names.splice(i, 1);

    localStorage.setItem("lists", JSON.stringify(lists));
    localStorage.setItem("names", JSON.stringify(names));

    location.reload();
  }
}