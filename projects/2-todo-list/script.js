function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = ''; // yeniden yazilan array leri kaldirmak icin

  todos.forEach((element, index) => {
    
    const liEl = document.createElement('li');
    list.appendChild(liEl);
    liEl.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    liEl.innerText = element.task;
    if(element.completed){
      liEl.style.textDecorationLine = 'line-through';
    }
    const spanEl = document.createElement('span');
    liEl.appendChild(spanEl);
    spanEl.classList.add('badge', 'bg-primary', 'rounded-pill');

    const iCheck = document.createElement('i');
    spanEl.appendChild(iCheck);
    iCheck.classList.add('fa', 'fa-check');
    iCheck.addEventListener('click', ()=> {
      if(element.completed){
        element.completed = false;
        liEl.style.textDecorationLine = 'none';
      }else {
        element.completed = true;
        liEl.style.textDecorationLine = 'line-through';
      }
    });

    const iTrash = document.createElement('i');
    spanEl.appendChild(iTrash);
    iTrash.classList.add('fa', 'fa-trash');
    iTrash.addEventListener('click', ()=>{
    todos.splice(index, 1);
    populateTodoList(todos); //recursive 
    });

    
  });
  // Write your code to create todo list elements with 
  // completed and delete buttons here, 
  // all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML 
// after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: true },
];

populateTodoList(todos);

// This function will take the value of the input field and 
// add it as a new todo to the bottom of the todo list. 
// These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
    const todoInputEl = document.getElementById('todoInput');
    todos.push({task: todoInputEl.value, completed: false});
    populateTodoList(todos);
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a function that checks the todos in the todo list and 
// deletes the completed ones (we can check which ones are completed by 
// seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
    todos = todos.filter(element =>{
      return !element.completed;
    })
    event.preventDefault();
    populateTodoList(todos);
  // Write your code here...
}
