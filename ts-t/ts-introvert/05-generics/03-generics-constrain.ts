//

function logValue<T extends { value: string }>(obj: T): void {
  console.log(obj.value);
}

//
class DataHolder<T = string> {
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }
}

const stringHolder: DataHolder<string> = new DataHolder('Some');
stringHolder.getData();
