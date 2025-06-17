interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const API_URL = "https://jsonplaceholder.typicode.com/todos/1";

const fetchTodos = async () => {
  try {
    const response: Response = await fetch(API_URL);
    const data: Todo = await response.json();

    console.log(data.title); // !!!
  } catch(error) {
    console.log(error instanceof Error ? error.message: 'unknown error');
  }
}

fetchTodos();
