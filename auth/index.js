import {generatePassword, generateEmail} from "./modules/generate.js"

const data = {email: "vigar.ext@gmail.com", password: "P4ssword"};  //object
const FormRegister = ({email, password}) => { //function destructuring object
    return generatePassword(email, password);
}

console.log(FormRegister(data));