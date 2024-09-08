function removeTaskFromList(i, t) {
  const lists = getLists();
  lists[i].splice(t, 1);

  document.getElementById(`task-${i}-${t}`).remove();

  localStorage.setItem("lists", JSON.stringify(lists));

  location.reload();
}