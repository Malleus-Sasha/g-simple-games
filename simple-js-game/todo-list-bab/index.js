const itemTemplate = document.getElementById("todo-list-item-template");
const listElement = document.getElementById("todo-list");
const editForm = document.getElementById("edit-form");

let id = 0;
function* makeId() {
  while(true) {
    yield id++;
  }
}

const idGenerator = makeId();

editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(editForm);
  const data = Object.fromEntries(formData.entries());
  const listItem = itemTemplate.content.cloneNode(true);

  console.dir(formData);
  console.log('Submit>entries', data);

  if (editForm.dataset.mode === 'create') {
    if (data.title) {
    listItem.querySelector('.todo-item').setAttribute('id', idGenerator.next().value);
    listItem.querySelector('.title').ineerText = data.title;
    listItem.querySelector('.desc').ineerText = data.desc;
    listElement.append(listItem);
    }
  } else if (editForm.dataset.mode === "edit") {
    // listItem = listElement.getElementById(editForm.dataset.editId);
    listItem = listElement.querySelector(`#${editForm.dataset.editId}`);
    listItem.querySelector('.title').ineerText = data.title;
    listItem.querySelector('.desc').ineerText = data.desc;
  }

  editForm.reset();
  editForm.dataset.mode = "create";
  editForm.dataset.editId = "";  
  
});

function editItem(element) {
  editForm.dataset.mode = 'edit';
  editForm.dataset.editId = element.id;
  editForm.querySelector('[name]=title') = element.querySelector('.title').innerText;
  editForm.querySelector('[name]=desc') = element.querySelector('.desc').innerText;
}

function deleteItem(element) {
  element.remove();
}

function toggleItemCompletion(element) {
  element.classList.toggle('completed');
}

listElement.addEventListener('click', (event) => {
  const item = event.target.closest('.todo-item');

  // console.log('event', item);
  console.log(event.target.dataset.action);

  switch (event.target.dataset.action) {
    case 'edit':
      alert('EDIT');
      editItem(item);
    case 'delete':
      alert('Delete');
      deleteItem(item);
    case 'complete':
      toggleItemCompletion(item)
    default:
        return;
  }
})

// 1 04 - t

// const copy = itemTemplate.content.cloneNode(true);
// listElement.append(copy);
