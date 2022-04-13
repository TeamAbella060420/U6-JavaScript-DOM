const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

btnCreate.addEventListener('click', () => {											 
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');    

  input.value = '';                 
  list.insertAdjacentHTML(
      'afterbegin',
      `<li>${input.value}</li>`     
  );  
});                              // These syntax added the task that you type from the input box and listed it below.

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
});                              // These syntaxt is for the red buuton at the bottom to remove the last task on the list.