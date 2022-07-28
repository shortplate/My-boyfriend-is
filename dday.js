// dDayForm = 날짜를 나타내는 form
const dDayForm = document.querySelector("#dday-form");
const dDayInput = dDayForm.querySelector("#dday-input");
// dDay = d-day를 나타낼 h1 태그
const dDay = document.querySelector("#dday-output");
// ANNIVERSARY = localStorage에 저장 될 key name
const ANNIVERSARY = "anniversary";
const DDAYHIDDEN = "hidden";
dDayInput.max = new Date().toISOString().split("T")[0];

function onSubmit(event) {
    event.preventDefault();
    if (localStorage.getItem("username") === null) {
        alert("이름을 입력해주세요.");
    } else if (event.target[0].value === "") {
        alert("날짜를 입력해주세요.");
    } else {
        dDayForm.classList.add(DDAYHIDDEN);
        const myAnniversary = new Date(`"${event.target[0].value}"`) / (1000 * 60 * 60 * 24);
        localStorage.setItem(ANNIVERSARY, myAnniversary);
        printDDay();
    }
}

function printDDay(event) {
    const myDate = Math.floor((new Date()/ (1000 * 60 * 60 * 24)) - localStorage.getItem(ANNIVERSARY)) + 1;
    dDay.innerText = `저희는 ${myDate}일째 사랑하는 중입니다.`;
    dDay.classList.remove(DDAYHIDDEN);
}

const savedAnniversary = localStorage.getItem(ANNIVERSARY);

if (savedAnniversary === null) {
    dDayForm.classList.remove(DDAYHIDDEN);
    dDayForm.addEventListener("submit", onSubmit);
} else {
    printDDay();
}
