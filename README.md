# javascript_basic01
Traversy Media's javascript crash course
console.log("hello");
console.error("this is a error");
console.warn("this is a warning");

//data types
const name = "john"; //string
const age = 15; //number
const rating = 2.4; //number
const imcool = true; //boolean
const x = null;
const y = undefined;
let z; //undefined
console.log(typeof name); //change the const

//template string
console.log(`My name is ${name} and im ${age}`);

//string properties
let a = "Hello World";
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.substring(0, 5).toUpperCase());
console.log(a.split(" "));
console.log(a.split(""));

//arrays
const fruits = ["apple", "banana", "orange", "melon", 10, true];
console.log(fruits[0]);
console.log(fruits[3]);

fruits[3] = "grape"; //replace
console.log(fruits[3]);

fruits.push("mango"); //add at the end
fruits.unshift("strawberry"); //add at the beginning
console.log(fruits);

console.log(fruits.indexOf("banana")); //check the index of something
console.log(Array.isArray(fruits)); //check if this is a array or not (return true or false)

const person = {
  firstname: "sam",
  lastname: "john",
  age: 15,
  hobbies: ["coding", "music", "drawing"],
  address: {
    street: "park street",
    city: "yangon",
    number: "207",
  },
};

console.log(
  person.firstname,
  person.lastname,
  person.age,
  person.hobbies[1],
  person.address.city
);

person.email = "sam@gmail.com";
console.log(person);

const todo = [
  {
    id: 1,
    text: "learn js",
    iscompleted: true,
  },
  {
    id: 2,
    text: "learn react",
    iscompleted: false,
  },
  {
    id: 3,
    text: "learn api",
    iscompleted: false,
  },
];
console.log(todo[1]);
const jsontodo = JSON.stringify(todo);
console.log(todo);
console.log("this is json");
console.log(todo);

//for loop
for (let i = 0; i <= 10; i++) {
  console.log(`for loop number is ${i}`);
}

//while loop
let i = 0;
while (i <= 10) {
  console.log(`while loop number is ${i}`);
  i++;
}

//loop arrays
for (i = 0; i < todo.length; i++) {
  console.log(todo[i].text);
}

for (let i of todo) {
  console.log("texts of todos", i.text);
}

//for each, map, filter
todo.forEach(function (i) {
  console.log(i.text);
});

const todoText = todo.map(function (i) {
  return i.text;
});
console.log(todoText);

const todocompleted = todo
  .filter(function (todocompleted) {
    return todo.iscompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todocompleted);

//foreach vs map test from another tutotial
const studentnames = ["John", "Sam", "Tom"];
studentnames.forEach((name) => console.log(name));
console.log(studentnames.forEach((name) => name.toLowerCase())); //undefined
console.log(studentnames.map((name) => name.toLowerCase())); //return a new array

let foreachname = studentnames.forEach((foreachname) => foreachname);
console.log(foreachname); //undefined

let mapname = studentnames.forEach((mapname) => mapname);
console.log(mapname); // return a new array
console.log(studentnames); //the old array stays the same

const numbers = [2, 13, 5, 12, 4, 20];
const higherthan10 = numbers.filter((num) => num > 10);
console.log(higherthan10);

const students = [
  {
    id: 11,
    eyecolor: "blue",
    gender: "male",
  },
  {
    id: 19,
    eyecolor: "blue",
    gender: "female",
  },
  {
    id: 32,
    eyecolor: "green",
    gender: "male",
  },
];

const blueeyestudents = students.filter((eye) => eye.eyecolor === "blue");
console.log(blueeyestudents);

const under20 = students.filter((underid20) => underid20.id < 20);
console.log(under20);

//if,else

const numcheck = 10;
//== only check the value, === also check the data type
if (numcheck === 10) {
  console.log("Y is 10");
} else if (numcheck > 10) {
  console.log("Y is greater than 10");
} else {
  console.log("Y is smaller than 10");
}

//conditions
const varx = 1;
const vary = 10;

if (varx < 2 || vary < 10) {
  console.log("x is greater than 2 or y is smaller than 10");
} else if (varx == 2 && vary == 10) {
  console.log("x is 2 and y is 10");
}

//another way for and
/*
if (varx == 2) {
  if (vary == 10) {
  }
}*/

const colorindicator = 10;
const color = colorindicator > 11 ? "red" : "blue"; //?=then, :=else
console.log(color);

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

function addnum(num1 = 1, num2 = 5) {
  return num1 + num2;
}
console.log(addnum(2, 5)); //if there're 2 numbers, the numbers here will be taken for the output

const num3 = 3;
const num4 = 6;
const addnums = num3 + num4;
console.log(addnums);

const numadd = (num3) => num3 + 5;
console.log(numadd(7));

/*constructure function
function personinfos(firstname, lastname, dob) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.dob = dob;
}

personinfos.prototype.getbirthyear = function () {
  return this.dob.getFullYear();
};
personinfos.prototype.getFullName = function () {
  return `${this.firstname}${this.lastname}`;
};*/

//class
class personinfos {
  constructor(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
  }
  getbirthyear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstname}${this.lastname}`;
  }
}

//instantiate onject
const person1 = new personinfos("Sam", "James", "2-3-2008");
const person2 = new personinfos("Tom", "Coop", "1-2-2003");
const person3 = new personinfos("Tim", "Runer", "3-5-2004");

console.log(person1.firstname);
console.log(person2.lastname);
console.log(person3.dob);
