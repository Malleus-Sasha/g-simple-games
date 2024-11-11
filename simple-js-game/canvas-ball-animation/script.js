"use strict";
let W, H, L, lines = 15;
let c = 0;
let dc = 0.25;
// { sin, cos, PI, sqrt, random, floor, ceil, round, abs } Math;
let { PI } = Math;
// * controls *
let ctrls = [];

// cnv
let cnv;
let ctx;

// ----
function id(n) {
  return document.getElementById(n);
}

function atan(x1, y1) {
  let dx = x2 - x1;
  let dy = y2 - x1;
  console.log('dx:dy:', dx, dy);
  
  if (dx === 0) {
    if (dy >= 0) {
      return PI / 2;
    } else {
      return PI * (3 / 2);
    }
  } else if (dx > 0) {
    return Math.atan(dy / dx);
  } else {
    return PI + Math.atan(dy / dx);
  }
}

// OnLoad
// DOMContentLoaded
function init() {
  W = window.innerWidth;
  H = window.innerHeight;
  L = (W < H ? W : H) / 2;

  cnv.width = W;
  cnv.height = H;

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, W, H);
}

function onStart(e) {
  cnv = id('canvas');
  ctx = cnv.getContext('2d');
}

function Point() {
  this.ang = 2*PI*Math.random();
  this.dang = (-0.5 + Math.random()) / 10;
  this.r = 2 * L / 3;
  this.x = W / 2 + this.r * Math.cos(this.ang);
  this.y = H / 2 + this.r * Math.sin(this.ang);
  this.update = function() {
    this.ang += this.dang;
    this.x = W / 2 + this.r * Math.cos(this.ang);
    this.y = H /2 + this.r * Math.sin(this.ang);
  }
}

function animate() {
  ctx.fillStyle = 'rgba(0,0,0,0.04)';
  ctx.fillRect(0, 0, W, H);
  ctx.beginPath();
  ctx.moveTo(
    (ctrls[0].x + ctrls[lines-1].x)/2,
    (ctrls[0].y + ctrls[lines-1].y)/2
  );

  for (let p = 0; p < lines; p++) {
    let q = p + 1;
    if (q == lines) q = 0;
    ctx.quadraticCurveTo(
      ctrls[p].x,
      ctrls[p].y,
      (ctrls[p].x + ctrls[q].x)/2,
      (ctrls[p].y + ctrls[q].y/2)
    );
    ctrls[p].update();
  }

  ctx.strokeStyle = `hsl(${Math.round(180+c)}deg, 100%, 70%)`;
  ctx.shadowBlur = L * 30/432;
  ctx.shadowColor = `hsl(${Math.round(180+c)}deg, 100%, 50%)`;
  ctx.lineWidth = L * 2/432;

  ctx.stroke();
  ctx.shadowColor = 'transparent';
  c += dc;
  if (c >= 170 || c <= 0) dc = -dc;

  // console.log('::Animate::');
  window.requestAnimationFrame(animate);
}


window.addEventListener('load', (e) => {
  console.log("page is fully loaded");
  onStart();
  init();
  for (let i = 0; i < lines; i++) {
    ctrls.push(new Point());
  }

  animate();
})

window.addEventListener('resize', (e) => {
  console.log('page resize...');
  init();
})
