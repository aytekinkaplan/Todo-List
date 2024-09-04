const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const deleteAllBtn = document.getElementById("delete-all-btn");
const completeAllBtn = document.getElementById("complete-all-btn");
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
let todos = [];

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo();
});

deleteAllBtn.addEventListener("click", () => {
  todos = [];
  renderTodos();
});

completeAllBtn.addEventListener("click", () => {
  todos = todos.map((todo) => ({ ...todo, completed: true }));
  renderTodos();
});

function addTodo() {
  const todoText = input.value.trim();
  if (todoText) {
    todos.push({ text: todoText, completed: false });
    input.value = "";
    renderTodos();
  }
}

function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = `list-group-item d-flex justify-content-between align-items-center todo-item animate__animated animate__fadeIn ${
      todo.completed ? "completed" : ""
    }`;
    li.innerHTML = `
            <span onclick="toggleTodo(${index})">${todo.text}</span>
            <button class="btn btn-sm btn-danger" onclick="deleteTodo(${index})">Delete</button>
        `;
    todoList.appendChild(li);
  });
}

renderTodos();
