const list = document.getElementById('list');
const input = document.getElementById('input');
const container = document.getElementById('plus');


function addToDo(todo){
    const text = `<li><span onclick="remove()"><i class="fa fa-trash"></i></span>${todo}</li>`;
    const position = 'beforeend';
    list.insertAdjacentHTML(position, text);
}

document.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo);
        }
        input.value = '';
    }
});

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('completed');
    }
}, false);

container.addEventListener('click', function(ev){
    if(ev.target.tagName === 'I'){
        input.classList.toggle('hide');
    }
}, false);

function remove(){
    event.currentTarget.parentElement.remove();
}

