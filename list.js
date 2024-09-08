function getList() {
  return JSON.parse(localStorage.getItem("list"));
}


function init() {
  if (getList() == null) {
    localStorage.setItem("list", JSON.stringify([]));
  }

  displayList();
}

function checkEnter() {
  if (event.key === "Enter") {
    addToList();
  }
}

function addToList() {
  const localList = getList();

  const input = document.getElementById("input");

  if (input.value === "") {
    return;
  }

  localList.push(input.value)

  const list = document.getElementById("list");
  list.innerHTML = `<li id="${localList.length - 1}"><span onclick="removeFromList(${localList.length - 1})">${input.value}</span></li>` + list.innerHTML;

  localStorage.setItem("list", JSON.stringify(localList));

  input.value = "";
}

function displayList() {
  const localList = getList();
  const list = document.getElementById("list");

  for (i in localList) {
    list.innerHTML = `<li id='${i}'><span onclick="removeFromList(${i})">${localList[i]}</span></li>
        ` + list.innerHTML;
  }
}

function removeFromList(i) {
  const localList = getList();

  localList.splice(i, 1);

  const listItem = document.getElementById(`${i}`);
  listItem.remove();

  localStorage.setItem("list", JSON.stringify(localList));

  document.getElementById("list").innerHTML = "";
  displayList();
}

function clearList() {
  if (confirm("Are you sure?")) {
    localStorage.removeItem("list");
    location.reload();
  }
}