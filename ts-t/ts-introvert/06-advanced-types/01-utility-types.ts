interface IUser {
  id: number;
  name: string;
  age: number;
}

//***  Partial  */
// all - params?: -
const partialUser: Partial<IUser> = { id: 11 };

// Readonly
const user: Readonly<IUser> = {
  id: 12,
  name: 'Alice',
  age: 25
}

// Pick
type UserPreview = Pick<IUser, 'id' | 'name'>;
interface IUserPreview extends Pick<IUser, 'id' | 'name'> {

};

const preview: UserPreview = {
  id: 13,
  name: 'Don'
}

// Record
type Role = 'admin' | 'user' | 'guest';

const rolePermission: Record<Role, string[]> = {
  admin: ['read','write'],
  user: ['read', 'write'],
  guest: ['read']
}

// --- Omit ---
type UserWithoutAge = Omit<IUser, 'age'>;

const userWithoutAge: UserWithoutAge = {
  id: 15,
  name: 'Jack',
}

// ---
