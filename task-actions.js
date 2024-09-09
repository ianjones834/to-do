async function removeTaskFromList(listName, t) {
  const list = getList(listName);
  list.splice(t, 1);
  lists[listName] = list;
  location.reload();
}