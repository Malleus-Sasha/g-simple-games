const gamesBoardContainer = document.getElementById('gamesboard-container');
const optionContainer = document.querySelector('#option-container');
const turnDisplay = document.querySelector('#turn-display');
const infoDisplay = document.querySelector('#info');
// *** Buttons
const addButton = document.getElementById('add-button');
const flipButton = document.querySelector('#flip-button');
const refreshButton = document.querySelector('#refresh-button');
const startButton = document.querySelector('#start-button');

let angle = 0;
let gameOver = false;

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
  
  // console.log('Rand: ', randomStartIndex);
  // console.log('s blocks: ', shipBlocks);
}


// ===== ADD Ships ===
console.log('=ADD SHIPS=');
ships.forEach(ship => addShipPiece('computer', ship));

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
  console.log('dragStart: ', e);
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
  const allBoardBlocks = document.querySelectorAll('#player div');
  let isHorizontal = angle === 0;

  const { shipBlocks, valid, notTaken } = getValidity(allBoardBlocks, isHorizontal, startIndex, ship);

  if (valid && notTaken) {
    shipBlocks.forEach(shipBlock => {
      shipBlock.classList.add('hover');
      setTimeout(() => shipBlock.classList.remove('hover'), 500);
    })
  }
}

// ******* Start Game *******

function startGame() {
  if (optionContainer.children.length != 0) {
    infoDisplay.textContent = 'Please place all your pieces first!';
  } else {
    const allBoardBlocks = document.querySelectorAll('#computer div');
    allBoardBlocks.forEach(block => block.addEventListener('click', handleClick));
  }
}

// *********************
let playerHits = [];
let computerHits = [];
const playerSunkShips = [];
const computerSunkShips = [];

function handleClick(e) {
  if (!gameOver) {
    if (e.target.classList.contains('taken')) {
      e.target.classList.add('boom');
      infoDisplay.textContent = 'You hit the computers ship!';
      let classes = Array.from(e.target.classList);

      classes = classes.filter(className => className != 'block');
      classes = classes.filter(className => className !== 'boom');
      classes = classes.filter(className => className !== 'taken');
      playerHits.push(...classes);
      checkScore('check:s:player:', playerHits, playerSunkShips);
      console.table(playerHits);
    }

    if (!e.target.classList.contains('taken')) {
      infoDisplay.textContent = 'Nothing hit this time.';
      e.target.classList.add('empty');
    }

    playerTurn = false;
    const allBoardBlocks = document.querySelectorAll('#computer div');
    allBoardBlocks.forEach(block => block.replaceWith(block.cloneNode(true)));
    setTimeout(computerGo, 3000);
  }
}

// ******* Define the computers GO *******
function computerGo() {
  if (!gameOver) {
    turnDisplay.textContent = 'Computer Go!';
    infoDisplay.textContent = 'The computer is thinking...';

    setTimeout(() => {
      let randS = Math.random();
      let randomGo = Math.floor(randS * width * width);
      console.log(':computer.go:', randomGo, randS);
      const allBoardBlocks = document.querySelectorAll('#player div');

      if (allBoardBlocks[randomGo].classList.contains('taken') && allBoardBlocks[randomGo].classList.contains['boom']) {
        computerGo();
        return;
      } else if (allBoardBlocks[randomGo].classList.contains('taken') && !allBoardBlocks[randomGo].classList.contains['boom']) {
        allBoardBlocks[randomGo].classList.add('boom');
        infoDisplay.textContent = 'The computer hit your ship!';

        let classes = Array.from(allBoardBlocks[randomGo].classList);
        classes = classes.filter(className => className != 'block');
        classes = classes.filter(className => className !== 'boom');
        classes = classes.filter(className => className !== 'taken');
        computerHits.push(...classes);
        checkScore('computer', computerHits, computerSunkShips)
      } else {
        infoDisplay.textContent = 'Nothing hit this time.';
        allBoardBlocks[randomGo].classList.add('empty');
      }
    }, 1000);

    setTimeout(() => {
      playerTurn = true;
      turnDisplay.textContent = 'Your Go!';
      infoDisplay.textContent = 'Please take your go.'
      const allBoardBlocks = document.querySelectorAll('#computer div');
      allBoardBlocks.forEach(block => block.addEventListener('click', handleClick));
    }, 1500);

  }
}

function checkScore(user, userHits, userSunkShips) {
  function checkShip(shipName, shipLength) {
    if (userHits.filter(storedShipName => storedShipName === shipName).length === shipLength) {
      infoDisplay.textContent = `you sunk the ${user}'s ${shipName}`;
      if (user === 'player') {
        playerHits = userHits.filter(storedShipName => storedShipName !== shipName);
      }
      if (user === 'computer') {
        computerHits = userHits.filter(storedShipName => storedShipName !== shipName);
      }
      userSunkShips.push(shipName);
    }
  }

  checkShip('destroyer', 2);
  checkShip('submarine', 3);
  checkShip('cruiser', 3);
  checkShip('battleship', 4);
  checkShip('carrier', 5);

  console.log('s:playerHits', playerHits);
  console.log('s:playerSunkShips', playerSunkShips);
}


// ******* Button Events *******
flipButton.addEventListener('click', flip);
startButton.addEventListener('click', startGame);
addButton.addEventListener('click', () => {
  ships.forEach(ship => addShipPiece('player', ship));
  Array.from(optionContainer.children).forEach(el => el.remove());
  console.dir(optionContainer.children);
});
// refreshButton.addEventListener('click', () => addShipPiece(destroyer));



// T 1 . 18 . 10 - 1 . 3 6 - 44 


