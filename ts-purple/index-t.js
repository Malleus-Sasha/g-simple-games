"use strict";
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
const getFullName = (firstName, surname) => {
    return `${firstName} ${surname}`;
};
const getFullName2 = (user) => {
    return `${user.firstName} ${user.surname}`;
};
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
};
console.log(getFullName2(user));
// ARRAY
const skills = ['Dev', 'DevOps'];
for (let skill of skills) {
    console.log(skill.toLowerCase());
}
const skillsFilter1 = skills.filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(skillsFilter1);
