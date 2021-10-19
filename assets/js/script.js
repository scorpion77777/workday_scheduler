var timeDisplayEl = $("#time-display");

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var saveButton = document.querySelector("#submit");

var todos = [];

// Displaying  time
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

function renderTodos() {
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
}

function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  renderTodos();
}

function storeTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add click event to todoList element
saveButton.addEventListener.on("click", function (event) {
  var input = todoInput.value;
  console.log(input);
  saveButton.text(input);

  storeTodos();
  renderTodos();
});

// Calls init to retrieve data and render it to the page on load
init();
