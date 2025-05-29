//  ---  ?   ---
interface Person {
  name: string;
  address?: {
    street: string;
  },
  getAge?: () => number,
  array?: string[],
}

// !!!      ---    .?   ---
function prepareUser(user: Person) {
  console.log(user.address?.street);
  console.log(user.getAge?.());
  user.array?.[0];
  //    ----   !.   ---  NON-NULL
  user.address!.street;
}
 
