function todoList(todos) {
  const content = document.getElementById('content');
  const ulEl = document.createElement('ul');
  content.appendChild(ulEl);

  todos.forEach( element =>{
    const liEl = document.createElement('li');
    liEl.innerText = element.todo;
    ulEl.appendChild(liEl);

    liEl.addEventListener('click', ()=>{
      if (liEl.style.textDecorationLine === 'line-through'){
        liEl.style.textDecorationLine = 'none';
      } else {
        liEl.style.textDecorationLine = 'line-through';
      }
    });
  });
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);