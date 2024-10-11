function makeBubble() {
  let clutter = "";

  for (var i = 0; i < 160; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
    var timer = 60;
    var timerInt = setInterval(function () {
      if (timer > 0) {
        timer--;
        document.querySelector("#timerval").textContent = timer;
      } else {
        clearInterval(timerInt);
      }
    }, 1000);
  }


function makeHit() {
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}


makeBubble();
runTimer();
makeHit();
