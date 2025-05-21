// any
// unknown
// never
// void

let v1: any;
v1 = 5;
v1 = [1];
v1 = { n: 10 };

// Unknown
function logData(data: unknown) {
  let value: string;
  // Err: //value = data;
  if(typeof data === 'string') {
    value = data;
  }

  if(Array.isArray(data)) {
    // Err: //value = data;
  }
}

// Never
let v2: never;
// Err let str2: string = v2;

let str3: string = '123';
// Err let v3: never = str3;

enum Values {
  FIRST,
  SECOND,
  // THIRD,
}

function fn1(value: Values) {
  switch(value) {
    case Values.FIRST:
      return value;
    case Values.SECOND:
      return value;
    default: 
      const exhaustiveCheck: never = value;
      return value;
  }
}

fn1(Values.FIRST);

// Void
function fn2(): void {
  console.log('fn2');
  return undefined;
}

type Fn = (arg: number) => void;


