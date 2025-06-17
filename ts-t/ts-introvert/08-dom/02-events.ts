// Events
const myButton = document.querySelector('button');

myButton && myButton?.addEventListener('click', () => console.log('event btn 1'));
myButton?.addEventListener('click', (e: MouseEvent) => {});

myButton?.addEventListener('keyup', (e: KeyboardEvent) => {});

myButton?.addEventListener('touchstart', (e: TouchEvent) => {})

myButton?.addEventListener('dragstart', (e: DragEvent) => {})
