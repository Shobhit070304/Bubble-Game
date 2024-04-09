function makebubble() {
    var bubble = "";

    for (var i = 1; i <= 133; i++) {
        var num = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${num}</div>`
    }

    document.querySelector('#p_btm').innerHTML = bubble;
}

var timer = 60;

function runtime() {
    var time = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').textContent = timer;
        }
        else {
            clearInterval(time);
            document.querySelector('#p_btm').innerHTML = `<h1>Game over ! Your score was  ${score}</h1>`
        }
    }, 1000)
}

var no = 0;
function changehit() {
    no = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = no;

}

score = 0;
function incScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#p_btm").addEventListener("click", function (e) {
    var selnum = (Number(e.target.textContent));

    if (selnum === no) {
        incScore();
        makebubble();
        changehit();
    }

})


changehit();
runtime();
makebubble();
