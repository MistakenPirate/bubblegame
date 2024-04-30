var timer = 6;
var score = 0;
var hitrn;

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 85; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
  var timervar = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timervar);
      document.querySelector("#pbtm").innerHTML= `<div style="display:flex;flex-direction:column;justify-content:center;align-items:center"><h1>GAME OVER</h1><h2>Your score is ${score}</h2></div>`
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", (e) => {
  var clickedNum = Number(e.target.textContent)
    if ( clickedNum == hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
runTimer();
getNewHit();
