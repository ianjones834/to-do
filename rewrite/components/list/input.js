function generateListInput(listName) {
  const inputDiv = document.createElement("div", {
    class: "input-group mb-3"
  });

  const prependDiv = document.createElement("div", {
    class: "input-group-text"
  });

  const dateInput = document.createElement("input", {
    type: "date",
    id: `date-${listName}`
  });

  const inputText = document.createElement("input", {
    type: "text",
    class: "form-control",
    placeholder: "Task",
    id: `input-${listName}`,
    onkeypress: `validateEnter('${listName}')`
  });

  prependDiv.appendChild(dateInput);
  prependDiv.appendChild(inputText);

  inputDiv.appendChild(prependDiv);

  return inputDiv;
}

