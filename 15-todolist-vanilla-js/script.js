document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoSubmit = document.querySelector(".todo-submit");

  let editMode = false;
  let editItem = null;

  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
      if (editMode) {
        editItem.querySelector("span").textContent = todoText;
        todoSubmit.innerText = "Add Todo";
        editMode = false;
        editItem = null;
      } else {
        addTodoItem(todoText);
      }

      todoInput.value = "";
    } else {
      alert("Please enter the task");
    }
  });

  todoList.addEventListener("click", function (e) {
    const target = e.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
      if (target.classList.contains("remove-button")) {
        todoItem.remove();
      } else if (target.classList.contains("edit-button")) {
        editMode = true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.querySelector("span").textContent;
        todoInput.focus();
      }
    }
  });

  function addTodoItem(todoText) {
    const todoItem = document.createElement("li");
    const todoTextSpan = document.createElement("span");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    todoTextSpan.textContent = todoText;
    editButton.innerText = "🖋️";
    removeButton.innerText = "❌";
    editButton.classList.add("edit-button");
    removeButton.classList.add("remove-button");

    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
});
