const itemTemplate = document.getElementById("todo-list-item-template");
const listElement = document.getElementById("todo-list");
const editForm = document.getElementById("edit-form");

editForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(editForm);
  const data = Object.fromEntries(formData.entries());
  console.dir(formData);
  console.log('Submit', data);

  if (data.title) {
    const listItem = itemTemplate.content.cloneNode(true);
    listItem.querySelector('.title').ineerText = data.title;
    listItem.querySelector('.desc').ineerText = data.desc;
    listElement.append(listItem);
    editForm.reset();
  }
});

listElement.addEventListener('click', (event) => {
  const target = event.target;

  switch (target.data.edit) {
    case 'edit':
      alert('EDIT');
      default:
        return;
  }
})

// const copy = itemTemplate.content.cloneNode(true);
// listElement.append(copy);
