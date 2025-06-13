// TYPEOF
// * typeof Obj *
const obj = {
  name: 'U T',
  age: 25,
}

type Person = typeof obj; // Syntax TS typeof

const color = 'red';

type RedColor = typeof color;

const green: RedColor = 'green';

function getData(user: Person): number {
  return 5;
}

type GetDataFn = typeof GamepadHapticActuator;

type GetDataReturnValue = ReturnType<typeof getData>;
type GetDataParams = Parameters<typeof getData>
// ** KEYOF ***

type PersonKey1 = keyof Person;
type PersonKey2 = keyof typeof obj;

// get keys

function getByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getByKey(obj, 'ter');
getByKey(obj, 'age');
