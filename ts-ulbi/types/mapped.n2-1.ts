interface User {
  name: string;
  age: number;
  friends: Array<string>;
}

type OptionalType<T> = {
  readonly [K in keyof T]: T[K] | null;
}

type EditType<T> = {
  -readonly [K in keyof T]-?: T[K];
}

type NewUser = OptionalType<User>;
type NewUser2 = EditType<NewUser>;

type ArrayAnalog<T> = {
  [K in string]: T;
}

const array1: ArrayAnalog<string> = {
  '123': '123',
  S: '123',
}

// 2  "Exclude" (-) without type

interface User {
  name: string;
  age: number;
  type: string;
  friends: Array<string> // string[]
}

interface Car {
  name: string;
  type: string;
}

interface RandomObj {
  name: string;
  type: string;
}

type WithoutType<T> = {
  [K in keyof T as Exclude<K, 'type'>]: T[K];
}

type UpperCase<T> = {
  [K in keyof T as `${Capitalize<string & K>}`]: T[K];
}

const withoutType: 

 
