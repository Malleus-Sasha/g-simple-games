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

