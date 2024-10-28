console.log('start js');

// *** Board
const playerBoardBlock = document.getElementById('player');
const computerBoardBlock = document.getElementById('computer');
const widthBoard = 5;
// ->
const genBoard = (block) => {
  for (let i = 0; i < widthBoard * widthBoard; i++) {
    const el = document.createElement('div');
    el.classList.add('block');
    block.append(el);
  }
}

const dragOver = (e) => {
  console.log(':DRAG OVER:PLAYER:', e.target);
}



// *** Init
genBoard(playerBoardBlock);
genBoard(computerBoardBlock);

// **** Init Events
playerBoardBlock.querySelectorAll('div').forEach((el) => {
  el.addEventListener('dragover', dragOver);
})
