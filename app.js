const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

function attachRemoveButton(li) {
    let remove = document.createElement('button')
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove)
}

btnCreate.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    const input = document.querySelector('.input-main');
    let li = document.createElement('li');
    li.textContent = input.value;
    attachRemoveButton(li)
    ul.appendChild(li);
    input.value = '';
  });                           

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');
    
    if ( listContainer.style.display === 'none' ) {
        btnToggle.textContent = 'Hide List';
        listContainer.removeAttribute('style');
    } else {
        btnToggle.textContent = 'Show List';
        listContainer.style.display = 'none';
    }
});                              // These syntax is for the hide list and show list click button.

btnRemove.addEventListener( 'click', ( ) => {
    const lastItem = document.querySelector('li:last-child');
    lastItem.remove();
});                              // These syntaxt is for the red button at the bottom to remove the last task on the list.