const todos = document.querySelectorAll('.todoItem');

todos.forEach(item =>{
  item.addEventListener('click',(e) => {
    item.classList.remove('todoItem');
    item.classList.add('enRoute');
    const newItem = document.createElement('li');
    newItem.classList.add('completedItem');
    const text = document.querySelector('.enRoute').innerHTML;
    newItem.innerHTML = text;
    const holder = document.querySelector('.completedTodoWrapper');
    const above = document.querySelector('.completed');
    holder.insertBefore(newItem, above);
    item.classList.remove('enRoute');
    item.remove();
  })
})
