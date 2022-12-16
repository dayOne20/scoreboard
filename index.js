
//--------------------Home-------------------------------

let plusBtnOne = document.getElementsByClassName('btn-one')
let plusOneScore = document.getElementById('home-score')
let plusCounter = 0
   
function plusOne() {
    plusOneScore.textContent = plusCounter += 1      
}
 
    
let plusBtnTwo = document.getElementById('btn-two')
let plusTwoScore = document.getElementById('home-score')

function plusTwo() {
    plusTwoScore.textContent = plusCounter += 2
}


let plusBtnThree = document.getElementById('btn-three')
let plusThreeScore = document.getElementById('home-score')

function plusThree(){
    plusThreeScore.textContent = plusCounter += 3
}


// ---------------------Guest-------------------------------

let guestBtnOne = document.getElementById('guest-btn-one')
let guestScore = document.getElementById('guest-score')
let guestCounter = 0

function guestOne(){
    guestScore.textContent = guestCounter += 1
}


let guestBtnTwo = document.getElementById('guest-btn-two')
let guestTwoScore = document.getElementById('guest-score')

function guestTwo() {
    guestTwoScore.textContent = guestCounter += 2
}


let guestBtnThree = document.getElementById('guest-btn-three')
let guestThreeScore = document.getElementById('guest-score')

function guestThree() {
    guestThreeScore.textContent = guestCounter += 3
}


//-----------------------Reset------------------------------

let resetScores = document.getElementById('reset-btn')
let resetHomeScores = document.getElementById('home-score')
let resetGuestScores = document.getElementById('guest-score')


function reset(){
    guestCounter = 0,
    plusCounter = 0,
    resetHomeScores.textContent = 0   
    resetGuestScores.textContent = 0
    elem.textContent = timeLeft + ' seconds remaining';
    countdown();
}

//-----------------------Timer------------------------------

// let timeLeft = 5;
//     let elem = document.getElementById('timer-div');
//     let timerId = setInterval(countdown, 1000);
    
//     function cronometer(){
//         if (plusCounter || guestCounter > 1);
//         elem.textContent = timeLeft + ' second remaining';
//     } else {
//         timeLeft == 0
//         reset();
//     }
        
    
    
    // function countdown() {
    //   if (timeLeft == -1) {
    //     clearTimeout(timerId);
    //     // elem.innerHTML = ' Game Over!';
    //     reset()
    //   } else {
          
    //       timeLeft
        //   plusCounter || guestCounter > 1
        //   countdown
    //     // elem.innerHTML = timeLeft + ' seconds remaining';
    //     // timeLeft--;
    //   }
    // }
    
//     window.onload = function() {
// let sec = 5;
//   setInterval(function() {
//     document.getElementById("timer-div").innerHTML = sec;
//     sec--;
//     if (sec == 00) {
//     sec = 5
//     plusCounter && guestCounter 

//   }
//     }1000);
    
//     }
// setInterval(function(){ alert("Popup window!"); }, 500);

// let timeleft = 3;
// let downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//   }
//   document.getElementById("time-div").value = 3 - timeleft;
//   timeleft -= 1;
// }, 1000);