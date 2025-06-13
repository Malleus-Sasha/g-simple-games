interface MetaData {

}

interface User {
  username: string;
}

interface Article {
  title: string;
}

// interface ApiResponse<U>
interface ApiResponse<T, Meta> {
  status?: 'error' | 'success';
  meta?: Meta;
  requestId?: string;
  data: T;
}

interface ApiResp1<Data = User> {
  status?: 'error' | 'success';
  requestId?: string;
  data: Data;
}

const responseUser: ApiResponse<User> = {
  data: {
   username: 'Ake'
  }
};

const responseArticle: ApiResponse<Article> = {
  data: {
    title: 'Title Article',
  }
}

// Children

interface Tree<T> {
  id: string;
  value: T;
  children: Tree<T>[] | null;
}

const treeNode: Tree<User> = {
  id: '10',
  value: {
    username: '1234',
  },
  children: [
    {
      id: '11',
      value: {
        username: '1111',
      },
      children: null;
    }
  ]
}

// FUNCTION
function genericFn<T>(arg: T) {

}

const arrowGeneric = <T, V>(arg: T): T => {
  return arg;
}

const data = arrowGeneric<User>({username: '111'});

// Extends. ... add params

function createEntity<T extends {id: string, createdAt: string}>(arg: T) {
  arg.createdAt;
  return arg;
}

createEntity({ id: '111', createdAt: '333'});

// Class

class Order<T> {
  private data: T;

  constructor(arg: T) {
    this.data = arg;
  }
}

// Constrains, Condition

type isArray<T> = T extends any[] ? true : false;

const first:isArray<string> = false;
const second:isArray<string[]> = true;

type UserR = {
  username: string;
}

type RandomName<T> = T extends User ? {value: number} : { value: string };

const third: RandomName<{username: string}>;


