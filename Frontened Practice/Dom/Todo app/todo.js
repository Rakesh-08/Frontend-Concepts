//  Variables

const form = getelement("addForm");
const todolist = getelement("todos");
const filter = getelement("filter");
const inputtodo = getelement("todo");
const liItems = document.getElementsByTagName("li");

const todoArray = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4'];
let input = filterTodo();

console.log(input)

// EventListeners

//form submit

form.addEventListener("submit", addTodo);

// click event on delete

todolist.addEventListener("click", removeTodo);

// keyup event on search

filter.addEventListener("keyup", filterTodo);

// functions

function getelement(id) {
  return document.getElementById(id);
}

function addTodo(event) {
  event.preventDefault();

  // get the user input
  let newtodo = inputtodo.value;

  if (newtodo) {

    let IsTodExist = todoArray.find(i => i.toUpperCase() == newtodo.toUpperCase());

    if (!IsTodExist) {
      todoArray.push(newtodo)
      renderTodos([newtodo], "")
      inputtodo.value = "";

    }
  }
}

function removeTodo(e) {

  if (e.target.classList.contains("delete")) {
    let result = confirm("Are you sure?");

    if (result) {
      let li = e.target.parentElement;
      let deleteTodo = e.target.previousElementSibling.innerHTML;
      todoArray.splice(todoArray.indexOf(deleteTodo), 1)
      todolist.removeChild(li);

    }
  }
}

function filterTodo(e) {
  // convert to lowercase letter
  
 let t= e ? e.target.value : ""
 
  return t;

}

function renderTodos(arr, input) {

  arr.map(i => {

    if (i.toUpperCase().includes(input.toUpperCase())) {
      //  create li element
      let li = document.createElement("li");
      let paragraph = document.createElement("p")

      // add classes to li element
      li.className = "list-group-item  bg-info d-flex justify-content-between";

      paragraph.innerHTML = i;

      // add button element
      let deletebtn = document.createElement("button");

      // add classes to btn element

      deletebtn.className = "btn btn-danger btn-sm delete";
      deletebtn.innerText = "delete";

      li.append(paragraph);
      li.append(deletebtn)
      todolist.append(li);

    } else {

    }
  })

}

renderTodos(todoArray,input)
