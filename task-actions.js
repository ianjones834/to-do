function removeTaskFromList(listName, t) {
  const list = getList(listName);
  list.splice(t, 1);

  document.getElementById(`task-${listName}-${t}`).remove();

  localStorage.setItem(listName, JSON.stringify(list));
}