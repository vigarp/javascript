let CryptoJS = require("crypto-js")

// const text = "Fazztrack"

// // Encrypt
// let encryptData = CryptoJS.AES.encrypt(text, "mandalika01").toString();

// // Decrypt
let crack = CryptoJS.AES.decrypt('U2FsdGVkX18vqkiDx8tFRICUPSU8tDxfDFsm6E3GLjIf3EbUDzipsk77dBcJCfJSqoo03SQXeOJ/raIj081+z+0E136ZZQKet/WLL6qatn0=', "mandalika01");
let originalText = crack.toString(CryptoJS.enc.Utf8);

// console.log(encryptData);
// console.log(crack);
console.log(originalText);