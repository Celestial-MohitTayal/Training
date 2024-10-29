
var timer = 60;
var score = 0;
var rn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
  let clutter = "";

  for (var i = 0; i < 160; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerInt = setInterval(function () {
      if (timer > 0) {
        timer--;
        document.querySelector("#timerval").textContent = timer;
      } else {
        clearInterval(timerInt);
        document.querySelector('#pbtm').innerHTML = `<h1>Game Over!</h1>`
      }
    }, 1000);
  }

function makeHit() {
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

document.querySelector("#pbtm").addEventListener("click", function(dets) {
    var clickedNumber = Number(dets.target.textContent)

    if(clickedNumber == rn) {
        increaseScore();
        makeBubble();
        makeHit();
    }
})


makeBubble();
runTimer();
makeHit();
increaseScore()
