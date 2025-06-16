interface IPerson {
  name: string;
  age: number;
  address: string;
}

type PartialPerson = {
  [P in keyof IPerson]?: IPerson[P];
}

const partialPerson: PartialPerson = {name: 'Dave'};

// - - - -

type ReadonlyPerson = {
  readonly [P in keyof IPerson]: IPerson[P];
}

type ReadOnlyT<T> = {
  readonly [P in keyof T]: T[P];
}

const userR: ReadOnlyT<IPerson> = {
  name: 'N',
  age: 31,
  address: 'Ad'
}

// userR.name = 'Ttt' // Error
// --- - - -
type StringifiedPerson = {
  [p in keyof IPerson]: string;
}
const stringifiedPerson: StringifiedPerson = {
  name: 'N',
  age: '31',
  address: 'Ad'
}
