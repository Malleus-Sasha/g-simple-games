interface User {
  type: string;
  name: string;
  age: number;
  friends: Array<string>;
}

type NewUser = Pick<User, 'name' | 'friends'>;
type NewUser2 = Omit<User, 'age' | 'type'>;
// Exclude, Extract
type Color = 'red' | 'green' | 'blue' | 'yellow';

type NarrowColor1 = Exclude<Color, 'blue' | 'yellow'>;
type NarrowColor2 = Extract<Color, 'blue' | 'yellow'>;

// ReturnType

function fn(arg1: number, arg2: string): string {
  return 'r';
}

type ReturnTypeFn = ReturnType<typeof fn>;

// Record

type Status = 'success' | 'error' | 'warning';

const colorsArray: Partial<Record<Color, string[]>> = {
  blue: ['1', '233']
}

// Record
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;
// ^?
