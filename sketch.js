var currentQuote = -1;
var timer = 30;

document.body.style.backgroundColor = "black"
blink();
async function blink() {
    for (var i = 0; i < 10; i++) {
        await new Promise(r => setTimeout(r, 50));
        document.body.style.backgroundColor = "white"
        await new Promise(r => setTimeout(r, 50));
        document.body.style.backgroundColor = "black"
    }
}
document.getElementById("triangle-anim").innerHTML = getTrangleAnimCode();
document.body.style += getTrangleAnimStyles();

blackOut();

async function blackOut() {
    await new Promise(r => setTimeout(r, 3000));
    for (var i = 0; i < 1.07; i += 0.07) {
        await new Promise(r => setTimeout(r, 100));
        document.getElementById("blackout").style.opacity = i;
    }
    document.getElementById("triangle-anim").innerHTML = ""
    document.getElementById("greet").innerHTML = ""
    document.getElementById("greet-bg").hidden = true;
    document.getElementById("blackout").style.opacity = 0;
    startConfetti();
    document.getElementById("quote").hidden = false;
    document.getElementById("timer").hidden = false;
    updateTimer();
}

async function updateTimer() {
    await new Promise(r => setTimeout(r, 999))
    if (timer > 0) {
        timer -= 1;
        document.getElementById("timer").innerText = timer;
        updateTimer();
    }
    else {
        showThanks();
    }
}

function showThanks() {
    document.getElementById("timer").hidden = true;
    document.getElementById("quote").hidden = true;
    document.getElementById("thanks").hidden = false;
}
