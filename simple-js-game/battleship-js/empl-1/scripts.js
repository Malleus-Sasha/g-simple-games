console.log('---------- start js');

class DisplayInfo {

  constructor() {
    this.turnBlock = document.getElementById('display-turn');
    this.infoBlock = document.getElementById('display-info');
  }

  textInfo(text) {
    this.infoBlock.textContent = '---';

    setTimeout(() => {
      this.infoBlock.textContent = text;
    }, 200);
  }

  set textTurn(text) {
    this.turnBlock.textContent = text;
  }
}
// !!!
const displayInfo = new DisplayInfo();

// === Ships
const destroyer = { name: 'destroyer', length: 2};
const cruiser = { name: 'cruiser', length: 3};

const listShips = {
  '0': destroyer,
  '1': cruiser,
}

// ***=== Option
const optionBlock = document.querySelector('#option');
const optionShips = Array.from(optionBlock.children);

// Events

// ***=== Board
const playerBoardBlock = document.getElementById('player');
const computerBoardBlock = document.getElementById('computer');
const widthBoard = 5;

// 4 9 14 step width = 5;
let horizontalEdges = [];

const getHorizontalEdges = (width) => {
  let result = []
  for (let i = 0; i <= width; i++) {
    result.push(width * i + width - 1);
  }
  return result;
}

horizontalEdges = getHorizontalEdges(widthBoard);

const attackShip = (element) => {
  console.log(':attackShip', element)
  element.target.classList.add('miss');
}

// ->
const genBoard = (block) => {
  for (let i = 0; i < widthBoard * widthBoard; i++) {
    const el = document.createElement('div');
    el.classList.add('block');
    el.id = i;
    block.append(el);
  }
}

const addShip = (start, length) => {
  const indexStart = horizontalEdges.find((i) => i == +start) ? +start - (length - 1) : +start;
  for (let i = 0; i < length; i++) {
    let block = playerBoardBlock.children.item(indexStart + i);
    block.classList.add('taken');
  }
}

let draggedShip;
let draggedShipBlock;

const dragStart = (e) => {
  console.log('DragStart: ', e.target);
  draggedShip = listShips[e.target.id];
  draggedShipBlock = e.target;
}

const dragOver = (e) => {
  // console.log(':DRAG OVER:PLAYER:', e.target);
  e.preventDefault();
}

const dropShip = (e) => {
  console.log(':Drop Ship: ', e.target);
  addShip(e.target.id, draggedShip.length);
  draggedShipBlock.remove();
  shipsAddedToBoard.added += 1;
  console.log(shipsAddedToBoard)
}

// ========= GAME =========
const shipsAddedToBoard = {
  added: 0,
  shouldAdded: 2,
};

const startBtn = document.getElementById('btn-start');

function startGame() {
  console.log(':log start:');
  if (shipsAddedToBoard.added == shipsAddedToBoard.shouldAdded) {
    console.log(':Game Start');
    displayInfo.infoBlock('The game has started!');
  } else {
    console.log(':Add ships');
    displayInfo.textInfo('Please place all your pieces first!');
  }
}
// ====== =====
// *** Init
genBoard(playerBoardBlock);
genBoard(computerBoardBlock);
displayInfo.textTurn = 'Your Go!';

// **** Init Events
optionShips.forEach((ship) => ship.addEventListener('dragstart', dragStart));

playerBoardBlock.querySelectorAll('div').forEach((el) => {
  el.addEventListener('dragover', dragOver);
  el.addEventListener('drop', dropShip);

  el.addEventListener('click', attackShip)
})

startBtn.addEventListener('click', startGame);
