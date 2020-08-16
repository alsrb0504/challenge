const TODO_FORM = document.querySelector(".js-todo");
const TODO_INPUT = TODO_FORM.querySelector("input");
const TODO_LIST = document.querySelector(".js-todo-list");

let TODOS = [];

function addTodosLS() {
  localStorage.setItem("Todos", JSON.stringify(TODOS));
}

function submitTodo(event) {
  event.preventDefault();
  const todo = TODO_INPUT.value;
  TODO_INPUT.value = "";

  const Todo_object = {
    id: TODOS.length + 1,
    todo,
  };

  TODOS.push(Todo_object);
  addTodosLS();
  makeTodosList(Todo_object);
}

function loadTodos() {
  const saveTodos = JSON.parse(localStorage.getItem("Todos"));

  if (saveTodos !== null) {
    TODOS = saveTodos;

    TODOS.forEach((TODO) => {
      makeTodosList(TODO);
    });
  }
}

function makeTodosList(TODO) {
  const li = document.createElement("li");
  const del_btn = document.createElement("button");
  del_btn.innerText = `❌`;
  del_btn.addEventListener("click", deleteTODO);
  const finish_btn = document.createElement("button");
  finish_btn.innerText = `✅`;
  finish_btn.addEventListener("click", completeTODO);

  li.id = TODO.id;
  li.innerText = `${TODO.todo} `;
  li.appendChild(del_btn);
  li.appendChild(finish_btn);

  TODO_LIST.appendChild(li);
}

function deleteTODO(event) {
  const REMOVE_LI = event.target.parentNode;

  const REMOVE_AFTER_TODOS = TODOS.filter((TODO) => {
    return TODO.id !== parseInt(REMOVE_LI.id);
  });

  TODO_LIST.removeChild(REMOVE_LI);
  TODOS = REMOVE_AFTER_TODOS;
  addTodosLS();
}

function completeTODO(event) {
  const COMPLETE_LI = event.target.parentNode;

  COMPLETE_LI.classList.add("js-complete");
  COMPLETE_LI.removeChild(event.target);
}

function init() {
  loadTodos();

  TODO_FORM.addEventListener("submit", submitTodo);
}

init();
