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
