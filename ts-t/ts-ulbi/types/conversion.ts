// Assertion
interface Person {
  age: number;
  username: string;
  password: string;
}

interface Person1 {
  age: number;
  username: string;
  password: string;
  f: string;
}

const obj = {
  age: 25,
  username: 'Ul TV',
} as Person;

// is same 'as Person'
const obj2 = <Person>{
  age: 25,
  username: 'Tv',
}

const str = '1234' as unknown as number;

const obj3 = {
  age: 25,
  username: 'T Tv',
  password: '1234',
  f: '1',
} satisfies Person1;

// !!! 2

function JSONParse<T>(data: string): T {
  return JSON.parse(data) as T;
}
const parsedJson1 = JSON.parse('{age: 25}');
const parsedJson2 = JSONParse<Person>('{age: 25}');

async function getData() {
  const data = await fetch('');
  const parsedData = await data.json();
}

// 3
const PersonKeys = {
  age: 'age',
  username: 'username',
  password: 'password',
} as const;  

const keysP = Object.keys(obj);

function keys<T extends object>(data: T): Array<keyof T> {
  return Object.keys(data) as Array<keyof T>
}

const k = keys(PersonKeys);

// !!!
const Obj: Object = 1;

const objT: object = 1; // !!!
// ***


