const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS = "todos";
let toDo = [];

function onSubmit(event) {
    event.preventDefault();
    if (localStorage.getItem("username") === null) {
        alert("이름을 입력해주세요.");
    } else {
        const newToDo = toDoInput.value;
        toDoInput.value = "";
        const newToDoObj = {
            text : newToDo,
            id : Date.now(),
        };
        toDo.push(newToDoObj);
        printToDo(newToDoObj);
        saveToDo();
    }
}

function printToDo(enter) {
    const li = document.createElement("li");
    li.id = enter.id;
    const span = document.createElement("span");
    span.innerText = enter.text;
    const button = document.createElement("button");
    button.innerText = "x"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function saveToDo() {
    localStorage.setItem(TODOS, JSON.stringify(toDo));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDo = toDo.filter(enter => enter.id !== parseInt(li.id));
    saveToDo();
}

toDoForm.addEventListener("submit", onSubmit);

const savedToDo = localStorage.getItem(TODOS);

if (savedToDo !== null) {
    const parsedToDo = JSON.parse(savedToDo);
    toDo = parsedToDo;
    parsedToDo.forEach(printToDo);
}