namespace MathUtils {
  export function add(a: number, b: number): number {
    return a + b;
  }

  export function subtract(a: number, b: number): number {
    return a - b;
  }
}

const sum = MathUtils.add(1, 2);
const diff = MathUtils.subtract(2, 1);

// 
// namespace Models {
//   export interface User {
//     id: number;
//     name: string;
//   }

//   export interface Product {
//     id: number;
//     name: string;
//     price: number;
//   }
// }

/*
// <reference path="models-namespace.ts" />
*/
const _user: Models.User = {
  id: 0,
  name: "F"
}

const product: Models.Product = {
  id: 0,
  name: "",
  price: 0
}

// 
import { User } from "./models";

const user: User = {
  id: 0,
  name: ""
}

