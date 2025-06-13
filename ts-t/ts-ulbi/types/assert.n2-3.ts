interface User {
  name: string;
  age: number;
}

function assertIsUser(data: any): asserts data is User {
  if (typeof data !== 'object' || data === null) {
    throw new Error("Object expected");
  }
  if (typeof data.name != 'string') {
    throw new Error('Property name must be a string')
  }
  if (typeof data.age != 'number') {
    throw new Error('Property age must be a number');
  }
}

// 
function assertNotNull(value: unknown): asserts value {
  if (value === null || value === undefined) {
    throw new Error('Value is null or undefined');
  }
}

try {
  assertNotNull(null)
} catch(e) {
  console.log(e);
}
