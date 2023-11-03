const obj = {
  name: "aziz",
  age: 25,
  isAdmin: false,
};
obj.name = "Noor";

let obj2: {
  name: string;
  age: number;
  phoneNumber?: string | number;
};

obj2 = {
  name: "aziz",
  age: 32,
};

let anyType: any;
anyType = "af";
anyType = 23;
anyType = false;

// FUNCTIONS
// functions type
const testFunction = (): string => {
  //   console.log("hello");
  return "typescript";
};

// functions with parameter
const returnFunction = (num: number): number | string | boolean | [] | {} => {
  return num * 2;
};

const nonReturn = (): void => {
  console.log("hello");
};

const sum = (num1: number, num2: number, num3?: number) => {
  return num1 + num2;
};

sum(3, 4);
sum(5, 6, 7);

// TYPE ALIASES.

type UserTypes = {
  name: string;
  age: number;
  phone: string;
};

let obj3: {
  name: string;
  age: number;
  phone: string;
};
function user(user: UserTypes) {
  return user.name;
}

obj3 = {
  name: "aziz",
  age: 34,
  phone: "2345",
};
user(obj3);
