window.addEventListener('load', () => {
  const GAME_WIDTH = 640;
  const GAME_HEIGHT = 340;

  const gameLive = true;
  const level = 1;
  const life = 5;
  const color = "white";

  const enemies = [
    {
      x: 100, 
      y: 100, 
      speedY: 2, 
      w: 40, 
      h: 40 
    },
    {
      x: 200,
      y: 0,
      speedY: 2,
      w: 40,
      h: 40
    },
    {
      x: 330,
      y: 100,
      speedY: 3,
      w: 40,
      h: 40
    },
    {
      x: 450,
      y: 100,
      speedY: -3,
      w: 40,
      h: 40
    }
  ];

  var player = {
    x: 10,
    y: 160,
    speedX: 2,
    isMoving: false,  
    w: 40,
    h: 40
  };

  var goal = {
    x: 580,
    y: 160,
    w: 50,
    h: 36
  }

  var sprites = {};

  var movePlayer = function() {
    player.isMoving = true;
  }

  var stopPlayer = function() {
    player.isMoving = false;
  }
  
  var canvas = document.getElementById("mycanvas");
  var ctx = canvas.getContext("2d");

  canvas.addEventListener('mousedown', movePlayer);
  canvas.addEventListener('mouseup', stopPlayer);   
  canvas.addEventListener('touchstart', movePlayer);
  canvas.addEventListener('touchend', stopPlayer);

});
