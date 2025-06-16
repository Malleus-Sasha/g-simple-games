interface IBox<T> {
  value: T;
}

const numberBox: IBox<number> = {
  value: 1234
}  
const stringBox: IBox<string> = {
  value: '1234'
}
//
type Pair<T, U> = {
  first: T,
  second: U,
}

const pair: Pair<string, number> = {
  first: '333',
  second: 33,
}


