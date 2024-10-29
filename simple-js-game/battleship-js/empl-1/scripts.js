console.log('start js');

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

console.log(horizontalEdges);

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

const dragStart = (e) => {
  console.log('DragStart: ', e.target);
  draggedShip = listShips[e.target.id];
}

const dragOver = (e) => {
  // console.log(':DRAG OVER:PLAYER:', e.target);
  e.preventDefault();
}

const dropShip = (e) => {
  console.log(':Drop Ship: ', e.target);
  addShip(e.target.id, draggedShip.length);
}

// ====== =====
// *** Init
genBoard(playerBoardBlock);
genBoard(computerBoardBlock);

// **** Init Events
optionShips.forEach((ship) => ship.addEventListener('dragstart', dragStart));

playerBoardBlock.querySelectorAll('div').forEach((el) => {
  el.addEventListener('dragover', dragOver);
  el.addEventListener('drop', dropShip);
})
