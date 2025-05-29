type ValueOf<T> = T[keyof T];

const COLORObj = {
  RED: 'red',
  GREEN: 'green',
  BLUE: 'blue',
}

type Color = typeof COLORObj[keyof typeof COLORObj];
type Color2 = ValueOf<typeof COLORObj>;


enum COLOR {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}


const enum COLOR2 {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
}

function setColor(color: COLOR) {

}

console.log(COLOR[0]);
setColor(COLOR.BLUE);
// Error  setColor(COLOR2.BLUE);
