function generateTask(i, t, input) {
  return `<li id="task-${i}-${t}" onclick="removeTaskFromList(${i}, ${t})">${input} </li>`
}

function initializeList(i) {
  const lists = getLists();

  const body = document.getElementById("body");

  body.innerHTML += generateList(i);

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

  const taskList = document.getElementById(`list-${i}`);
  taskList.innerHTML = generateTask(i, lists[i].length, input.value) + taskList.innerHTML;

  const task = document.getElementById(`task-${i}-${lists[i].length}`)

  lists[i].push(input.value)

  localStorage.setItem("lists", JSON.stringify(lists));

  input.value = "";
}

function clearList(i) {
  if (confirm("Are you sure?")) {
    console.log(i);
    const lists = getLists();
    lists.splice(i, 1);
    localStorage.setItem("lists", JSON.stringify(lists));

    location.reload();
  }
}