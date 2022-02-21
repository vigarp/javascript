let CryptoJS = require("crypto-js")

const text = "Fazztrack"

// // Encrypt
let encryptData = CryptoJS.AES.encrypt(text, "mandalika01").toString();

// // Decrypt
let crack = CryptoJS.AES.decrypt(encryptData, "mandalika01");
let originalText = crack.toString(CryptoJS.enc.Utf8);

console.log(encryptData);
// console.log(crack);
console.log(originalText);