const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const liDelete = event.target.parentElement;
  liDelete.remove();
}

function paintToDo(newTodo) {
  const liPaint = document.createElement("li");
  const spanPaint = document.createElement("span");
  spanPaint.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  liPaint.appendChild(spanPaint); // li 는 span 이라는 자식을 가지게 된다.
  liPaint.appendChild(button);
  toDoList.appendChild(liPaint);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
