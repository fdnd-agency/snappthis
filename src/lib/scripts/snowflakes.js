export function initSnowflakes() {
var canvas = dom.getElementById("canvas");

var ctx = canvas.getContext("2d");

var particlesOnScreen = 245;

var particlesArray = [];

var w,h;

w = canvas.width = window.innerWidth;

h = canvas.height = window.innerHeight;

function random(min, max) {
  return min + Math.random() * (max - min - 1);
};

function clientResize(ev) {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

window.addEventListener("resize", clientResize);

function createSnowflakes() {
  for(var i = 0; i < particlesOnScreen; i++){
    particlesArray.push({
      x: Math.random() * w,
      y: Math.random() * h,
      opacity: random(90, 100),
      speedX: random(-11, 11),
      speedY: random(7, 15),
      radius: random(0.5, 4),
    }) 
  }
};

function drawSnowFlakes() {
  for (var i = 0; i < particlesArray.length; i++) {
    var gradient = ctx.createRadialGradient(
      particlesArray[i].x,
      particlesArray[i].y,
      0,
      particlesArray[i].x,
      particlesArray[i].y,
      particlesArray[i].radius
    );

    gradient.addColorStop(
      0,
      "rgba(255, 255, 255," + particlesArray[i].opacity + ")"
    );

    ctx.beginPath();
    ctx.arc(
      particlesArray[i].x,
      particlesArray[i].y,
      particlesArray[i].radius,
      0,
      Math.PI * 2,
      false
    );

    ctx.fillStyle = gradient;
    ctx.fill();
    
    ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.stroke();
  }
};


function moveSnowFlakes() {
  for (var i = 0; i < particlesArray.length; i++) {
    particlesArray[i].x += particlesArray[i].speedX;
    particlesArray[i].y += particlesArray[i].speedY;
    
    if(particlesArray[i].y > h) {
      particlesArray[i].x = Math.random() * w * 1.5;
      particlesArray[i].y = -50;
    }
  }
}

function updateSnowFall() {
  ctx.clearRect(0, 0, w, h);
  drawSnowFlakes();
  moveSnowFlakes();
}

setInterval(updateSnowFall,50);
createSnowflakes();
}

export function initSnowflakes() {
  const canvas = document.getElementById('canvas')
  if (!canvas) return

  const ctx = canvas.getContext('2d')
}