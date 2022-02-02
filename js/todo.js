const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const liDelete = event.target.parentElement;
  liDelete.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(liDelete.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const button = document.createElement("button");
  button.innerText = "❌";
  const liPaint = document.createElement("li");
  liPaint.id = newTodo.id;
  const spanPaint = document.createElement("span");
  spanPaint.innerText = newTodo.text;
  button.addEventListener("click", deleteToDo);

  liPaint.appendChild(spanPaint); // li 는 span 이라는 자식을 가지게 된다.
  liPaint.appendChild(button);
  toDoList.appendChild(liPaint);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
