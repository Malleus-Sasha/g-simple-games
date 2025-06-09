let revenue = 1000;
let bonus = 500;
let res: number = revenue + bonus;
console.log(res);

const getFullName = (firstName: string, surname: string): string => {
  return `${firstName} ${surname}`;
}

const getFullName2 = (user: {firstName: string, surname: string}): string => {
  return `${user.firstName} ${user.surname}`;
}

console.log(getFullName('F ', 'S '));

const user = {
  firstName: 'Alta',
  surname: 'Lark',
  city: 'London',
  age: 33,
  skills: {
    dev: true,
    devops: true,
  }
}

console.log(getFullName2(user));

// ARRAY
const skills: [string, string] = ['Dev', 'DevOps'];

for(let skill of skills) {
  console.log(skill.toLowerCase());
}

const skillsFilter1 = skills.filter((s) => s !== 'DevOps')
  .map(s => s + '! ')
  .reduce((a, b) => a + b);

  console.log(skillsFilter1);

  // Tuples
  const skills2: [number, string, string] = [1, 'Dev', 'ops'];
  const skills3: [number, string, string, ...boolean[]] = [1, 'Dev', 'ops', true, true];

// Readonly

const ar1: readonly [string, string, ...boolean[]] = ['s', 's1', true, true];
const ar2: readonly string[] = ['s'];
// let zn1: readonly number = 111; // Error

// ENUMS

const resM = {
  message: 'Success',
  statusCode: 1, // 1, 2, 3
}

enum StatusCode {
  SUCCESS,
  IN_PROGRESS,
  FAILED,
}

enum StatusCode2 {
  SUCCESS = 1,
  IN_PROGRESS = 'P',
  FAILED = 'F',
}

if (resM.statusCode === StatusCode.SUCCESS) {
  console.log('SUCCESS');
}

function actionStatusCode(status: StatusCode) {
  console.log(status);
}

actionStatusCode(1);
actionStatusCode(StatusCode.FAILED);
// actionStatusCode('P'); // ERROR

// FUNCTION
enum Res1Status {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted'
}
type StatusRes1 = 'published' | 'draft' | 'deleted';

type Req1 = {
  topicId: 5,
  status: Res1Status,
}

type Res1 = {
  question: string;
  answer: string;
  tags: string[];
  links: number;
  status?: StatusRes1
}

async function getFaqs(req: Req1): Promise<Res1[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}

getFaqs({topicId: 5, status: Res1Status.Published}).then((res) => {
  res.map(d => {
    if(d.status) {
      console.log(d.status);
    };
  })
})

// Union      (Narrowing)
function logId(id: string | number) {
  // Narrowing
  if (typeof id === 'string') {
    console.log(id.toLowerCase())
  }
  console.log(id);
}

logId(1);
logId('log');

// Literals
enum ReqT1 {
  GET = 'get',
  POST = 'post',
}
function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
  return 1;
}

fetchWithAuth('article', 'post');

// Aliases
type User = {
  name: string,
  age: number,
  skills: string[]
}

type Role = {
  id: number;
  name: string;
}

type UserWithRole = User & Role;

// ORE
type UserFull = {
  user: User,
  role: Role
}

let user1: UserWithRole = {
  name: 'Al',
  age: 33,
  id: 1,
  skills: ['ad', 'po']
}

// Interface
interface UserI {
  name: string,
  age: number,
  skills: string[],
  log: (id: number) => string, 
}

interface RoleI {
  id: number;
  name: string;
}

interface UserWithRoleI extends UserI, RoleI {
  createAt: Date,
}

// ORE
interface UserFullI {
  user: User,
  role: Role
}

let user2: UserWithRoleI = {
  name: 'Al',
  age: 33,
  id: 1,
  skills: ['ad', 'po'],
  createAt: new Date(),
  log(id: number) {
    throw new Error("Function not implemented.");
  }
}

// Use
interface UserDictionary {
  [index: number]: UserI;
}

type UserDic = {
  [index: number]: UserI
}

// Type Record
type ud = Record<number, User>;


