const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleTodo(event) {
  const node = event.target.nodeName;
  const targetNode = event.target.parentNode;
  if (node === "BUTTON") {
    deleteTodo(targetNode);
  } else if (node === "INPUT") {
    handleCheckBox(event.target.checked, targetNode);
  }
}

function deleteTodo(target) {
  const targetId = target.id;
  toDoList.removeChild(target);
  toDos = toDos.filter(toDo => toDo.id !== Number(targetId));
  saveToDos();
}

function handleCheckBox(checked, target) {
  const targetId = target.id;
  const span = target.querySelector("span");
  checked
    ? span.classList.add("text-line")
    : span.classList.remove("text-line");

  toDos = toDos.map(toDo => {
    if (toDo.id === Number(targetId)) {
      return {
        ...toDo,
        checked
      };
    }

    return toDo;
  });

  saveToDos();
}

function paintToDo(text, checked) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  const span = document.createElement("span");
  checked && span.classList.add("text-line");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = checked;
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    id: newId,
    text,
    checked
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue, false);
  toDoInput.value = "";
}

function loadToDos() {
  const toDosString = localStorage.getItem(TODOS_LS);
  if (toDosString !== null) {
    const toDos = JSON.parse(toDosString);
    toDos.map(toDo => paintToDo(toDo.text, toDo.checked));
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
  toDoList.addEventListener("click", handleTodo);
}

init();
