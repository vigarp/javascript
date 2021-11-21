import CryptoJS from "crypto-js";
import { SECRET_KEY } from "../constant/key.js";

const generatePassword = (email, password) => {
    if (email == "vigar.ext@gmail.com" && password == "P4ssword") {
        const token = CryptoJS.AES.encrypt(JSON.stringify({email, password}), SECRET_KEY).toString();
        return {
            data: token
        }
    }
    return `Email atau password salah`;
};

const generateEmail = () => {
    return null;
}

export {
    generatePassword,
    generateEmail
}