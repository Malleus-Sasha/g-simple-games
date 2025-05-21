
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
class Audi {
  audiDrive() {}
}

class BMW {
  bmwDrive() {}
}

const bmw = new BMW();
const audi = new Audi():

function fnCar(arg: BMW | Audi) {
  if (arg instanceof BMW) {
    arg.bmwDrive();
  }
}
