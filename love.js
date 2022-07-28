const love = document.querySelector("#love");
const loveYou = document.querySelector("#love-you");
const LOVEHIDDEN = "hidden";
const LOVERESULT = "loveresult"

function onClick() {
    if (localStorage.getItem("username") === null) {
        alert("이름을 입력해주세요.");
    } else {
        loveYou.classList.remove(LOVEHIDDEN);
        if (localStorage.getItem(LOVERESULT) === null) {
            localStorage.setItem(LOVERESULT, 1);
        } else {
            localStorage.setItem(LOVERESULT, parseInt(localStorage.getItem(LOVERESULT)) + 1);
        }
        printLove();
    }
}

function printLove() {
    loveYou.innerText =`+${localStorage.getItem(LOVERESULT)}`;
}

if(localStorage.getItem(LOVERESULT) != null) {
    loveYou.classList.remove(LOVEHIDDEN);
    printLove();
}

love.addEventListener("click", onClick);