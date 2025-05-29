type Literal = 'red' | 'green';
type Id = number[];

interface Base {
  username: string;
}

// Preferring Interface Over Intersections
interface User extends Base {
  password: string;

}

type UserT = Base & {
  password: string;
}

type Tuple = [number, string, 5];

const tuple: Tuple = [3, '1', 5];

// 

type Fn1 = (arg: number) => string;

interface Fn2 {
  (arg: string): string;
}

const fn1: Fn1 = (n) => '123';

const fn2: Fn2 = (arg) => ('123' + arg);
