function getFirstElement1<T>(arr: T[]): T {
  return arr[0];
}
const getFirstElement2 = <T>(arr: T[]): T => arr[0]

// Use
const numbersArray: number[] = [1, 2, 3];
const firstElement = getFirstElement2(numbersArray);

//
class Box<T> {
  // private value: T;

  constructor(private value: T) { }

  getValue(): T {
    return this.value;
  }
}

const numbersBox = new Box<number>(10);
console.log(numbersBox);
