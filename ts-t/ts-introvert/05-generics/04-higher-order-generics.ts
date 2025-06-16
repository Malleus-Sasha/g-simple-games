{
  type Mapper<T, U> = (value: T) => U;

  /*
   * High Order
   * @param array 
   * @param mapper 
   * @returns 
   */
  function transformArray<T, U>(array: T[], mapper: Mapper<T, U>): U[] {
    return array.map(mapper);
  }

  const number = [1,2,3,4,5];
  const numberToString: Mapper<number, string> = (num) => num.toString();
  const stringifiedNumbers = transformArray(number, numberToString);
  console.log(stringifiedNumbers);

  //
  interface IProduct {
    id: number;
    name: string;
    price: number;
  }

  const products: IProduct[] = [
    { id: 1, name: 'Laptop1', price: 1200 },
    { id: 1, name: 'Mouse', price: 45 },
    { id: 1, name: 'Keyboard', price: 75 },
  ];

  const extractProductName: Mapper<IProduct, string> = (product) => product.name;
  const productNames = transformArray(products, extractProductName);

}
