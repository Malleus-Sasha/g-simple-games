type IsString<T> = T extends string ? true : false;
type A = IsString<'Hello'>;
type B = IsString<number>;

// - - - 
type FilterString<T> = T extends string ? T : never;

type MixedTypes = 'a' | 1 | 'b' | 2 | 'c';
type OnlyString = FilterString<MixedTypes>;

// 
type ReturnTepOf<T> = T extends (...args: any[]) => infer R ? R : never;

function getString(): string {
  return 'HEllo';
}

function getNumber(): number {
  return 55;
}

type StringReturnType = ReturnType<typeof getString>;
type NumberReturnType = ReturnType<typeof getNumber>;
