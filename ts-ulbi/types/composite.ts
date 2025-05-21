interface Address {
  city?: string;
  street?: string;
  coords: number[];
}

type User = {
  firstName: string;
  address: Address;
  age?: number;
}

const user: User[] = [{
  address: {
    coords: [5, 5],
  },
  firstName: 'Al',
}];

type ApiResponse<T> = {
  status: 'success' | 'error';
  data?: T;
}


