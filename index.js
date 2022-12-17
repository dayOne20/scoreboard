
// 1. ¿por qué los nombres de las variables y las funciones comparten la misma
// raíz por ejemplo: plus#### o guest####, es acaso que si tendrían nombres
// distintos el codigo no se engancharía ?

// 2. ¿Cómo conseguir que al hacer click en el reset button el
// timer empiece de nuevo el conteo hacia abajo ?

//--------------------Home-------------------------------

let plusBtnOne = document.getElementsByClassName("btn-one");
let plusOneScore = document.getElementById("home-score");
let plusCounter = 0;

function plusOne() {
  plusOneScore.textContent = plusCounter += 1;
}

let plusBtnTwo = document.getElementById("btn-two");
let plusTwoScore = document.getElementById("home-score");

function plusTwo() {
  plusTwoScore.textContent = plusCounter += 2;
}

let plusBtnThree = document.getElementById("btn-three");
let plusThreeScore = document.getElementById("home-score");

function plusThree() {
  plusThreeScore.textContent = plusCounter += 3;
}

// ---------------------Guest-------------------------------

let guestBtnOne = document.getElementById("guest-btn-one");
let guestScore = document.getElementById("guest-score");
let guestCounter = 0;

function guestOne() {
  guestScore.textContent = guestCounter += 1;
}

let guestBtnTwo = document.getElementById("guest-btn-two");
let guestTwoScore = document.getElementById("guest-score");

function guestTwo() {
  guestTwoScore.textContent = guestCounter += 2;
}

let guestBtnThree = document.getElementById("guest-btn-three");
let guestThreeScore = document.getElementById("guest-score");

function guestThree() {
  guestThreeScore.textContent = guestCounter += 3;
}

//-----------------------Reset------------------------------

let resetScores = document.getElementById("reset-btn");
let resetHomeScores = document.getElementById("home-score");
let resetGuestScores = document.getElementById("guest-score");

function reset() {
  (guestCounter = 0), (plusCounter = 0), (resetHomeScores.textContent = 0);
  resetGuestScores.textContent = 0;
}

//-----------------------Timer------------------------------

let timeleft = 8;
let downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("timer-div").innerHTML = "Game over";
    reset();
  } else {
    document.getElementById("timer-div").innerHTML =
      timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
