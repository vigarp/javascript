// // program mencari input dari array

// const angka = (input, arr) => {
//     let angkaSort = arr.sort();
//     angkaFilter = angkaSort.filter(num => num === input);
//     return angkaFilter;
// }

// console.log(angka(3, [1, 2, 4, 3, 4, 2, 3, 5, 6, 2, 3, 5, 4, 3, 2, 5 ,6, 8, 9]));

// // program menghasilkan ada berapa pada array

// const bilangan = (input, arr) => {
//     let angkaSort = arr.sort().filter(num => num === input);
//     angkaFinal = angkaSort.length;
//     return `Angka ${input} ada ${angkaFinal} buah`;
// }

// console.log(bilangan(5, [1, 2, 2, 3, 5, 7, 9, 2, 5, 2, 8, 7]));

// // program mencari ada berapa ganjil/genap pada array

// const bilangan = (input, arr) => {
//     let angkaSort = arr.sort()
//     let angkaGenap = angkaSort.filter(num => num % 2 == 0)
//     let angkaGanjil = angkaSort.filter(num => num % 2 != 0)
//     if (input == "ganjil") {
//         return angkaGanjil;
//     } else if (input == "genap") {
//         return angkaGenap;
//     } else {
//         return `Masukan pilihan ganjil/genap`
//     }
// }

// console.log(bilangan("ganjil", [1, 2, 2, 7, 5, 9, 3, 2, 4, 6, 8, 2, 5, 3, 8, 3, 2, 7]));

// const bilanganPrima = (num1, num2, arr) => {
//     const lowValue = parseInt(num1);
//     const highValue = parseInt(num2);
//     const myPrime = (number) => {
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 return false;
//             }
//         } return true;
//     }
//     if (lowValue == 1 || highValue == 1) {
//         console.log("Angka 1 bukan bilangan prima");
//     } else {
//         const angkaSort = arr.sort().filter(myPrime)
//         return angkaSort;
//     }
// }
// bilanganPrima(2, 9, [1, 2, 1, 5, 5, 6, 8, 9, 2, 3, 8, 9, 6, 5, 4, 6, 8]);