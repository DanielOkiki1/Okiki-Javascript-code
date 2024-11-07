//1. Arrithmetic operations
//addition

let sum = 5 + 3;
console.log(sum);

//subtractions
let difference = 10 - sum;
console.log(difference);

//multiplications
let products = sum * difference;
console.log(products);

//division
let quotient = products / 4;
console.log(quotient);

//modulus
let remainder = quotient % 3;
console.log(remainder);

//assignment operators
//these operators assign values to variables

//assignment
let x = 5;
console.log(x);

//addition assignment
let y = 5;
y += 1;
console.log(y);

//subtraction assignmnt
let z = 10;
z -= y;
console.log(z);

//equal
console.log(5 == "5");

//strict equal
console.log(5 === "5");

//not equal
console.log(5 != "5");

//strict not equal
console.log(5 !== "5");

let u = 4;
let v = 5;

console.log(5 != "5");
let l = 2;
let m = 7;

console.log(l != "m");

//strict not equal
console.log(5 !== "5");
let p = "okiki";
let b = 10;
console.log(p !== b);

//greater than
console.log(10 > 5);
let g = 12;
let k = 10;
let c = g + k;
console.log(k > g);

//less than
console.log(3 < 2);
let h = 12;
let i = 10;
let w = h - i;
console.log(x < w);

//greater than and equal
console.log(4 >= 5);
let d = 6;
let f = 6;
let n = u * 2;
console.log(u >= v);
let o = v - 3;

console.log(n >= o);

const hasdriverlicense = true;
const hasinsurance = true;
const cardrive = hasdriverlicense && hasinsurance;
console.log(cardrive);

const isadult = true;
const ishungry = false;

const canenter = isadult && ishungry;
console.log(canenter);

// || operator
const knowshtml = false;
const knowscss = true;
const candesignwebsite = knowshtml || knowscss;
console.log(candesignwebsite);

const isadmin = false;
const issuperuser = false;
const canaccesspage = isadmin || issuperuser;
console.log(canaccesspage);
