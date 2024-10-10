const gamesBoardContainer = document.getElementById('gamesboard-container');
const optionContainer = document.querySelector('#option-container');
// *** Buttons
const flipButton = document.querySelector('#flip-button');
const refreshButton = document.querySelector('#refresh-button');

let angle = 0;

function flip() {
  const optionShips = Array.from(optionContainer.children);
  // if (angle === 0) angle = 90 else angle = 0 
  angle = angle === 0 ? 90 : 0; 

  optionShips.forEach(ship => ship.style.transform = `rotate(${angle}deg)`);
}

// *** Create Boards
const width = 10;

function createBoard(color, user) {
  const gameBoardContainer = document.createElement('div');
  gameBoardContainer.classList.add('game-board');
  gameBoardContainer.style.backgroundColor = color;
  gameBoardContainer.id = user;

  for (let i = 0; i < width * width; i++) {
    const block = document.createElement('div');
    block.id = i;
    block.classList.add('block');
    gameBoardContainer.append(block);
  }

  gamesBoardContainer.append(gameBoardContainer);
}

createBoard('yellow', 'player');
createBoard('pink', 'computer'); 

class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 2);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 4);
const carrier = new Ship('carrier', 5);

const ships = [destroyer, submarine, cruiser, battleship, carrier];
let notDropped;

/**
 * @param allBoardBlocks 
* @return { shipBlocks , valid, notTaken }
**/
function getValidity(allBoardBlocks, isHorizontal, startIndex, ship) {
  let valid;
  let validStart = isHorizontal 
  ? startIndex <= width * width - ship.length 
    ? startIndex : width * width - ship.length : 
      // handle vertical (width * ship.length) - last dot
      startIndex <= width * width - width * ship.length ? startIndex :
      // Added vertical line
      startIndex - ship.length * width + width; 

  let shipBlocks = [];

  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
      shipBlocks.push(allBoardBlocks[Number(validStart) + i]);
    } else {
      shipBlocks.push(allBoardBlocks[Number(validStart) + i * width]);
    }
  }

  if (isHorizontal) {
    valid = shipBlocks.every((_shipBlock, index) => shipBlocks[0].id % width !== width - (shipBlocks.length - (index + 1)));
  } else {
    valid = shipBlocks.every((_shipBlock, index) => shipBlocks[0].id < 90 + (width * index + 1));
  }

  const notTaken = shipBlocks.every(shipBlock => !shipBlock.classList.contains('taken'));

  return { shipBlocks, valid, notTaken };
}

/**
 *  @user: 'player' | 'computer'
 */
function addShipPiece(user, ship, startId) {
  const allBoardBlocks = document.querySelectorAll(`#${user} div`);
  let randomBoolean = Math.random() < 0.5;
  let isHorizontal = user === 'player' ? angle === 0 : randomBoolean;
  let randomStartIndex = Math.floor(Math.random() * width * width);
  let startIndex = startId ? startId : randomStartIndex;

  const { shipBlocks, valid, notTaken } = getValidity(allBoardBlocks, isHorizontal, startIndex, ship);

  if (valid && notTaken) {
    shipBlocks.forEach(block => {
      // console.log('BLOCK: ', block);
      block.classList.add(ship.name);
      block.classList.add('taken');
    })
  } else {
    if (user === 'computer') addShipPiece(user, ship, startId);
    if (user == 'player') notDropped = true;
  }
  
  console.log('Rand: ', randomStartIndex);
  console.log('s blocks: ', shipBlocks);
}


ships.forEach(ship => addShipPiece('computer', ship));

flipButton.addEventListener('click', flip);
// refreshButton.addEventListener('click', () => addShipPiece(destroyer));

// ****** Drag player ships ************
const optionShips = Array.from(optionContainer.children);
const allPlayerBlocks = document.querySelectorAll('#player > div');
let draggedShip;

optionShips.forEach(ship => ship.addEventListener('dragstart', dragStart));

allPlayerBlocks.forEach(block => {
  block.addEventListener('dragover', dragOver);
  block.addEventListener('drop', dropShip);
});

function dragStart(e) {
  console.log('drapStart: ', e);
  notDropped  = false;
  draggedShip = e.target;
}

function dragOver(e) {
  console.log('dragOver');
  e.preventDefault();
  const ship = ships[draggedShip.id];
  highlightAreas(e.target.id, ship);
}

function dropShip(e) {
  console.log('dropShip');
  const startId = e.target.id;
  const ship = ships[draggedShip.id];
  addShipPiece('player', ship, startId);
  if (!notDropped) {
    draggedShip.remove();
  }
}

// ******* Add Highlight *******
function highlightAreas(startIndex, ship) {
  const allBoardBlocks = document.querySelectorAll('#playyer div');
  let isHorizontal = angle === 0;

  const { shipBlocks, valid, notTaken } = getValidity(allBoardBlocks, isHorizontal, startIndex, ship);

  if (valid && notTaken) {
    shipBlocks.forEach(shipBlock => {
      shipBlock.classList.add('hover');
      setTimeout(() => shipBlock.classList.remove('hover'), 500);
    })
  }
}

// T 1 . 00 . 10


