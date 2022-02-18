let inputElement = document.querySelector('input')
let formElement = document.querySelector('form')
let listElement = document.querySelector('ul')
let totalTaskElement = document.querySelector('#total-task')

let taskList = [
    'Buy Apple',
    'Buy Mango'
]
function deleteItem(e){
     let task = e.target.parentElement.previousElementSibling.innerHTML;
     let index = taskList.indexOf(task);
     if(index !== -1){
         taskList.splice(index, 1);
     }

     populateList();
}
function populateList(){
    listElement.innerHTML = '';
     taskList.forEach(function(item){
         let newItem = document.createElement('li')

         //Add New Span for text
         let span = document.createElement('span')
         span.innerHTML = item;
         newItem.appendChild(span);

         //Add delete button
         let anchorElement = document.createElement('a');
         anchorElement.classList.add('deleteItem');
         anchorElement.innerHTML = ' <i class="fas fa-trash-alt"></i>';
         newItem.appendChild(anchorElement);
         anchorElement.addEventListener('click', (e)=> deleteItem(e));

         //Add li to ul
         listElement.appendChild(newItem);
     });
    totalTaskElement.innerHTML = taskList.length;
    inputElement.value = '';
}

populateList();

function doesNotHaveWhiteSpaces(s){
    let stringwhithoutspace = s. trim();
    return stringwhithoutspace.length > 0;
}

function addTask(){
    if(inputElement.value && doesNotHaveWhiteSpaces(inputElement.value)){
        taskList.push(inputElement.value)
        populateList();
    }
}

formElement.addEventListener('submit', function(e){
    e.preventDefault();
    addTask();
});