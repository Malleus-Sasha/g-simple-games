class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log('Hello');
  }

  isAdult(): boolean {
    return this.age >= 18;
  }
}

const userInstance = new User('Sem', 30);
userInstance.greet();
console.log(userInstance.isAdult());

