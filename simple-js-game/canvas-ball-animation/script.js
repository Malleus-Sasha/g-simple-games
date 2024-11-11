"use strict";
let W, H, L, n = 15;
let c = 0;
dc = 0.25;
// { sin, cos, PI, sqrt, random, floor, ceil, round, abs } Math;

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
