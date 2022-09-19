var saniye1 = document.querySelector("#saniye1");
var saniye2 = document.querySelector("#saniye2");
var dk1 = document.querySelector("#dk1");
var dk2 = document.querySelector("#dk2");

var Btn_Start = document.querySelector("#btn1");
var Btn_Resume = document.querySelector("#btn2");
var Btn_Stop = document.querySelector("#btn3");

var timer;
var saniye_bir = 0;
var saniye_iki = 0;
var dk_bir = 0;
var dk_iki = 0;
var sayac = 0;

Btn_Start.addEventListener("click", () => {

  if(timer == null)
  {
    timer = setInterval(start_timer , 1000);
  }
});

function start_timer(){
  sayac+=1
  saniye1.innerHTML = sayac
  if(sayac == 10)
  {
    saniye1.innerHTML = 0
    sayac=0;
    saniye_iki+=1
    saniye2.innerHTML = saniye_iki
  }

  if(saniye_iki == 6)
  {
    saniye2.innerHTML = 0
    saniye_iki=0
    dk_bir+=1
    dk1.innerHTML = dk_bir
  }

  if(dk_bir == 10)
  {
    dk1.innerHTML = 0
    dk_bir=0
    dk_iki+=1
    dk2.innerHTML = dk_iki
  }

}

Btn_Stop.addEventListener("click", () => {
  clearInterval(timer);
  timer = null
  dk1.innerHTML = 0
  dk2.innerHTML = 0
  saniye1.innerHTML = 0
  saniye2.innerHTML = 0
  
});

Btn_Resume.addEventListener("click", () => {
  clearInterval(timer);
  timer = null
});
