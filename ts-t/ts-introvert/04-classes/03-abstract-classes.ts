abstract class Shape {
  abstract calculateArea(): number;

  displayShapeType(type: string): void {
    console.log(`THis is ${type}`);
  }
}

interface ICircleProperties {
  radius: number;
}

class Circle extends Shape implements ICircleProperties {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// 2
interface IRectangleProperties {
  width: number;
  height: number;
}

class Rectangle extends Shape implements IRectangleProperties {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const rectangle1 = new Rectangle(4, 6);
rectangle1.displayShapeType('P');
rectangle1.calculateArea();

