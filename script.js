const inputBox = document.getElementById('input_box');
const listContainer = document.getElementById('list_container');
const addButton = document.getElementById('addButton')
//the addButton will work with the addTask() function;

addButton.addEventListener('click', (e)=> {
    if (inputBox.value === '') {
        alert("Please, You must write your task!")
    }
    else {
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);

        //now creating the cross/cancel icon
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        list.appendChild(span);

    }
    inputBox.value = '';
    saveData();
})
//


listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();