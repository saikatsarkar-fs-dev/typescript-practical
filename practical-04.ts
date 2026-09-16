type UserType = {
  name: string;
  age: number;
  gender: string;
  number: string;
};

let userObject: UserType = {
  name: "Saikat Sarkar",
  age: 18,
  gender: "Male",
  number: "5965565456",
};

console.log(`Full Name: ${userObject.name}`);
console.log(`Age: ${userObject.age}`);
console.log(`Gender: ${userObject.gender}`);
console.log(`Phone Number: ${userObject.number}`);
