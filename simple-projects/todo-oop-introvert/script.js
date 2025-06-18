console.log('Todo app Start');

class DOM {
  query(selector) {
    return document.querySelector(selector)
  }
}

// Items
class Item {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
}

class TodoItem extends Item {
  constructor(id, text, completed = false) {
    super(id, text);
    this.completed = completed;
  }
}

// APP
class TodoApp {
  constructor() {
    this.dom = new DOM();
    this.todoList = [];
    this.todoInput = this.dom.query('[data-add-todo-input]');
    this.todoContainer = this.dom.query('[data-todos-container]');

    console.log('Init:')
    console.log(this.todoInput)

    this.bindEvents();
    this.render();
  }

  bindEvents() {
    this.todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        this.addTodo(e.target.value.trim());
        this.todoInput.value = '';
      }
    })
  }

  addTodo(text) {
    const newTodo = new TodoItem(Date.now(), text);

    this.todoList.push(newTodo);
    this.render();
    console.log('Add & :after:render()')
  }

  render() {
    this.todoContainer.innerHTML = '';

    this.todoList.forEach((todo) => {
      const todoItem = document.createElement('div');
      todoItem.textContent = todo.text
      todoItem.classList.add('todo-item');
      todoItem.dataset.id = todo.id;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Deleted';
      removeBtn.classList.add('remove-btn');
      removeBtn.dataset.id = todo.id;
      removeBtn.disabled = !todo.completed;

      todoItem.appendChild(removeBtn);
      this.todoContainer.appendChild(todoItem);
      console.log(todo)
    })
    console.log('Render')
  }
}

// NEw TODO
new TodoApp(); 
