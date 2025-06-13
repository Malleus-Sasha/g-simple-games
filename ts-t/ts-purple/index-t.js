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
// Tuples
const skills2 = [1, 'Dev', 'ops'];
const skills3 = [1, 'Dev', 'ops', true, true];
// Readonly
const ar1 = ['s', 's1', true, true];
const ar2 = ['s'];
// let zn1: readonly number = 111; // Error
// ENUMS
const resM = {
    message: 'Success',
    statusCode: 1, // 1, 2, 3
};
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    StatusCode[StatusCode["FAILED"] = 2] = "FAILED";
})(StatusCode || (StatusCode = {}));
var StatusCode2;
(function (StatusCode2) {
    StatusCode2[StatusCode2["SUCCESS"] = 1] = "SUCCESS";
    StatusCode2["IN_PROGRESS"] = "P";
    StatusCode2["FAILED"] = "F";
})(StatusCode2 || (StatusCode2 = {}));
if (resM.statusCode === StatusCode.SUCCESS) {
    console.log('SUCCESS');
}
function actionStatusCode(status) {
    console.log(status);
}
actionStatusCode(1);
actionStatusCode(StatusCode.FAILED);
// actionStatusCode('P'); // ERROR
// FUNCTION
var Res1Status;
(function (Res1Status) {
    Res1Status["Published"] = "published";
    Res1Status["Draft"] = "draft";
    Res1Status["Deleted"] = "deleted";
})(Res1Status || (Res1Status = {}));
async function getFaqs(req) {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req),
    });
    const data = await res.json();
    return data;
}
getFaqs({ topicId: 5, status: Res1Status.Published }).then((res) => {
    res.map(d => {
        if (d.status) {
            console.log(d.status);
        }
        ;
    });
});
console.log(Res1Status);
