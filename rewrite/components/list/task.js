function generateTask(listName, taskIndex, input) {
  const task = document.createElement("li", {
    id: `test-${listName}-${taskIndex}`,
    onclick: `removeTaskFromList('${listName}', ${taskIndex})`
  });

  return task;
}