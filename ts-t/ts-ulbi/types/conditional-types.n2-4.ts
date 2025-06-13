// Inferring Within Conditional Types
function fn(arg1: string, arg2: number): string {
  return '';
}

type MyParameters<T> = T extends (arg: infer U) => any ? U : never;

type FnArg = MyParameters<typeof fn>;

// 
type GetArrayItem<T extends any[]> = T extends (infer I)[] ? I : never;

const array1: string[] = [];

type ArrayItem = GetArrayItem<typeof array1>;
