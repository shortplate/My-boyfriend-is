const nameForm = document.querySelector("#boyfriend-name");
const nameInput = document.querySelector("#boyfriend-name input");
const hello = document.querySelector("#hello");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
    event.preventDefault();
    nameForm.classList.add(HIDDEN);
    localStorage.setItem(USERNAME_KEY, nameInput.value);
    paintUsername();
}

function paintUsername() {
    hello.innerText = `제 남자친구 이름은 ${localStorage.getItem(USERNAME_KEY)}입니다.`;
    hello.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    nameForm.classList.remove(HIDDEN);
    nameForm.addEventListener("submit", onSubmit);
} else {
    paintUsername();
}