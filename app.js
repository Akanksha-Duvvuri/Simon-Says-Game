let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "yellow", "purple"];

let started = false;
let level = 0;

let h4 = document.querySelector("h4");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(randomBtn);
    console.log(gameSeq);
}

function checkAns (idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h4.innerHTML = `Game Over! Your Score Is <u>${level}</u > <br>Press any key to start again.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id"); 
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
} 

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
