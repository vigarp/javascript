import {generatePassword, generateEmail} from "./modules/generate.js"

const data = {email: "vigar.ext@gmail.com", password: "P4ssword"};
const FormRegister = ({email, password}) => {
    return generatePassword(email, password);
}

console.log(FormRegister(data));