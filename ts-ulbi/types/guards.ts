interface Car {
  maxSpeed: number;
  width: number;
}

interface BMW extends Car {
  type: 'bmw';
}

interface AUDI extends Car {
  type: 'audi';
}

interface Person {
  age: number;
  name: string;
}

function isBmw(value: BMW | AUDI): value is BMW {
  return value.type ==='bmw';
}

function isCar(value: Car | Person): value is Car {
  return 'maxSpeed' in value && 'width' in value;
}

function isPerson(value: Car | Person) {
  return 'age' in value && 'name' in value;
}
function fn(data: Car | Person) {
  if(isCar(data)) {
    data.maxSpeed
  } else {
    data.name;
  }
}
