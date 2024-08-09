// first section animation
function makeRandomDuration(range, min){
  return (Math.random()*range + min).toFixed(1).toString()+'s';
}

function floating(node, duration){
  node.style.setProperty('--animate-duration', duration);
  node.classList.remove("animate__bounceInDown", "animate__bounceIn", "animate__delay-2s");
  node.classList.add("animate__shakeY", "animate__infinite");
}

function bounceInDown(node, delay, duration){
  node.style.setProperty('--animate-delay', delay);
  node.style.setProperty('--animate-duration', duration);
  node.classList.add("animate__animated", "animate__bounceInDown", "animate__delay-2s");
}

function bounceIn(node, delay, duration){
  node.style.setProperty("--animate-delay", delay);
  node.style.setProperty("--animate-duration", duration);
  node.classList.add("animate__animated", "animate__bounceIn", "animate__delay-2s");
}

var floatings = document.querySelectorAll(".floating");
for (var i=0; i<floatings.length; i++) {
  floatings[i].addEventListener("animationend", function(event){
    var node = event.target;
    floating(node, makeRandomDuration(20.0, 20.0));
  });
}

var box = document.querySelector("#box");
bounceInDown(box, "0.0s", "1.5s");

var stick1 = document.querySelector("#stick1");
bounceInDown(stick1, "0.6s", "1.2s");

var stick2 = document.querySelector("#stick2");
bounceInDown(stick2, "0.8s", "1.3s");

var stick3 = document.querySelector("#stick3");
bounceInDown(stick3, "0.7s", "1.3s");

var circle1 = document.querySelector("#circle1");
bounceIn(circle1, "0.8s", "500ms");

var circle2 = document.querySelector("#circle2");
bounceIn(circle2, "1.1s", "500ms");

var circle3 = document.querySelector("#circle3");
bounceIn(circle3, "0.9s", "500ms");

var circle4 = document.querySelector("#circle4");
bounceIn(circle4, "0.7s", "500ms");

var circle5 = document.querySelector("#circle5");
bounceIn(circle5, "1.0s", "500ms");

var circle6 = document.querySelector("#circle6");
bounceIn(circle6, "0.8s", "500ms");

var circle7 = document.querySelector("#circle7");
bounceIn(circle7, "1.3s", "500ms");

// scroll animation
const saDefaultMargin = 200;
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll(".sa");

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (element.dataset.saMargin) {
        saTriggerMargin = parseInt(element.dataset.saMargin);
      } else {
        saTriggerMargin = saDefaultMargin;
      }

      if (element.dataset.saTrigger) {
        saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
      } else {
        saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
      }

      if (window.innerHeight > saTriggerHeight) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);


$(document).ready(function(){

    var navHeight = $(".first").height();
    //navHeight 의 높이를 구하기

    $("#top").hide();
    $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
        var rollIt = $(this).scrollTop() >= navHeight;

        if(rollIt){
          $("#top").show().css({"position":"fixed"});
        }
        else{
          $("#top").hide();
        }
      });
  });
