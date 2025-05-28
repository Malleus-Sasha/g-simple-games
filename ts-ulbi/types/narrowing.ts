
function tfn(arg: number | string | null) {
  if (typeof arg === 'number') {
    arg.toFixed;
    return 
  } else if (typeof arg === 'string') {
    arg.split
    return
  }

  return arg;
}

// interfaces
interface User {
  username: string;
  age: number;
}

interface Person {
  lastname: string;
  firstname: string;
  age: number;
}

function fnUser(arg: User | Person) {
  if('username' in arg) {
    arg;
  }

  if('firstname' in arg) {
    // (parameter) arg: Person
    arg
  }

  arg;
}

// !!! instanseof  CLASS
class AUDI {
  audiDrive() {}
}

class BMW {
  bmwDrive() {}
}

const bmw = new BMW();
const audi = new AUDI();

function fnCar(arg: BMW | AUDI) {
  if (arg instanceof BMW) {
    arg.bmwDrive();
  }
}

// extends
interface BaseCar {
  maxSpeed: number;
  weight: number;
}

interface Bmw extends BaseCar {
  type: 'bmw';
  bmwField: string;
}

interface Audi extends BaseCar {
  type: 'audi';
  audiField: string;
}

type Car = Audi | Bmw;

function fnF(arg: Bmw | Audi) {
  switch(arg.type) {
    case 'audi':
      arg.audiField;
      break;
    case 'bmw':
      arg.bmwField;
      break;
    default:
      arg
  }
}
