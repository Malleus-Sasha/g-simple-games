// !!! '"experimentalDecorators": true

function Logging1(constructor: Function) {
  console.log('Logging1 ', constructor);
}
function Logging2(target: any, propertyKey: string | Symbol): void {
  console.log('Logging2 [target]', target);
}
function Logging3(target: any, propertyKey: string, descriptor: PropertyDecorator): void {
  console.log('Logging2 [target]', target);
}

@Logging1
class MyClass {
  @Logging2
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  @Logging3
  getName(): string {
    return this.name;
  }
}

const myClass = new MyClass('Decorators');
