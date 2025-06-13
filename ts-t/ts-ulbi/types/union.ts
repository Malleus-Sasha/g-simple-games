type MainInfo = {
  firstName: string;
  lastName: string;
};

type AdditionalInfo = {
  age: number;
};

type PartialInfo = AdditionalInfo | MainInfo;

const info0: PartialInfo = { firstName: 'N1', lastName: 'Ln1', age: 111 };
const info1: PartialInfo = { firstName: 'N1', lastName: 'Ln1'};
const info2: PartialInfo = { age: 11 };
// const info01ER: PartialInfo = { lastName: '11' }

// *** INTERSECTION
type FullInfo = AdditionalInfo & MainInfo;

const info00: FullInfo = { firstName: 'N1', lastName: 'Ln1', age: 111 };
const info01: FullInfo = { firstName: 'N1', lastName: 'Ln1'};
const info02: FullInfo = { age: 11 };

// Super and Sub Types
type SuperType = {
  name: string;
};

type SubType = {
  name: string;
  age: number;
};

const subType: SubType = { name: 'N1', age: 33 };
const superType: SuperType = subType;
// Err
const subType2: SubType = { name: 'N1' };
const superType2: SuperType = subType;



