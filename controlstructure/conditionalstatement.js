// a. if statement
let temperature = 30;

if (temperature > 25) {
  console.log("it is a hot day!");
} else {
  console.log("it is a cold day");
}

const isadmin = false;
const issuperuser = false;

if (isadmin || issuperuser) {
  console.log("you can have access to the app");
} else {
  console.log("you are not allowed to access this app");
}

const ispaidfees = false;
const isgoodhealth = false;

if (ispaidfees || isgoodhealth) {
  console.log("you have paid fees");
} else {
  console.log("welcome to the class or go back home");
}
