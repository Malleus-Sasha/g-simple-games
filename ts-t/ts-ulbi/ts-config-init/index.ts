import { Method } from './vite-project/node_modules/@babel/types/lib/index-legacy.d';
type User = {
  id: number;
  email: string;
  password: string;
}

const user: User = {
  id: 101,
  email: 'test@test.com',
  password: '123test'
}


type PrfnT = (id: number) => Promise<User>;

const prFn: PrfnT = async () => {
  return { id: 1, email: 'eee', password: '123' };
}
///
type Article = {
  title: string;
  description: string;
}
// API
type ApiT<T> = {
  key: string;
  message: string;
  data: T;
}

type UrlsApi = 'users' | 'article';
class ApiC {
  private url = '//api/users';

  fetchApi(url: UrlsApi, id?: number) {
    const ifId = id ? { method: 'POST', body: `{id:${id}}`} : undefined;
    return fetch(
      this.url,  
      ifId,
    ).then((res) => res.json())
      .then(data => data)
      .catch(error => {
        throw new Error('API Error');
      }) 
  }

  user<T>(id: number): Promise<T> {
    return this.fetchApi('users', id);
  }

  users<T>(): Promise<T>{
    return this.fetchApi('users');
  }

  article<T>(id: number): Promise<T> {
    // const params = { id };
    return this.fetchApi('article', id);
  }
}
const apiC = new ApiC();

let usersData1: User[];
apiC.users<ApiT<User[]>>().then(res => usersData1 = res.data);

let userData1: User;
apiC.user<ApiT<User>>(1).then((res) => {
   userData1 = res.data;
});

let article1: Article;
apiC.article<ApiT<Article>>(112).then((res) => {
  article1 = res.data;
})


// Example
type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const getTodo = async (): Promise<Todo> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
  return data;
};

getTodo();

/// Param from keys

type Pizza = {
  name: string;
  price: number;
  size: number;
}
type P = 's' | 't';
type PizzaParams = keyof Pizza;
const p2: PizzaParams = 'name';

type PizzaParamsArray = Array<keyof Pizza>; 
const p1: PizzaParamsArray = ['name', 'price'];
