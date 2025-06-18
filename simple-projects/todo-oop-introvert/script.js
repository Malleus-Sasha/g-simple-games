console.log('Todo app Start');

class LocalStorage {
  #keyName;

  constructor(keyName) {
    this.#keyName = keyName;
  }

  GetItem() {
    const items = localStorage.getItem(this.#keyName);
    return items ? JSON.parse(items) : [];
  }

  SetItem(itemsList) { 
    localStorage.setItem(this.#keyName, JSON.stringify(itemsList));
  }
}

class DOM {
  query(selector) {
    return document.querySelector(selector)
  }

  // ...rest operator. ::string[]
  create(type, textContent, ...classNames) {
    const item = document.createElement(type);
    item.textContent = textContent
    item.classList.add(...classNames);

    return item;
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
    this.todosStorage = new LocalStorage('todos');

    this.todoList = this.todosStorage.GetItem();
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
    });

    this.todoContainer.addEventListener('click', (e) => {
      console.log(e.target);
      const el = e.target;
      if (el) {

      } 
    })
  }

  addTodo(text) {
    const newTodo = new TodoItem(Date.now(), text);

    this.todoList.push(newTodo);
    this.todosStorage.SetItem(this.todoList);
    this.render();
    console.log('Add & :after:render()')
  }

  render() {
    this.todoContainer.innerHTML = '';

    this.todoList.forEach((todo) => {
      const todoItem = this.dom.create('div', todo.text, 'todo-item');
      todoItem.dataset.id = todo.id;

      const removeBtn = this.dom.create('button', 'Delete', 'remove-btn');
      removeBtn.dataset.id = todo.id;
      // removeBtn.disabled = !todo.completed;

      todoItem.appendChild(removeBtn);
      this.todoContainer.appendChild(todoItem);
      console.log(todo)
    })
    console.log('Render')
  }
}

// NEw TODO
new TodoApp(); 
