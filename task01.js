// 1. Build-in method concat()
const youngPeople = ["Frederick", "Lousiana"];
const oldPeople = ["James", "Abbot", "Bobby"];

const allPeople = youngPeople.concat(oldPeople);
console.log(allPeople);
console.log("\n");
// Menggabungkan dua array


// 2. Build-in method fill()
const fruits = ["Apple", "Strawberry", "Orange", "Banana"];
const milk = fruits.fill("Milk");
console.log(milk);
console.log("\n")
// Memenuhi dan menggantikan seluruh anggota array

// 3. Build-in method every()
const ages = [32, 33, 16, 40];
ages.every(checkAge);
function checkAge(age) {
    return age > 20;
}
console.log(checkAge());
console.log("\n");
// Mengecek/memeriksa array dengan sebuah function

// 4. Build-in method find()
const elder = [55, 58, 70, 49];
const showElder = elder.find(checkAge);
function checkAge(showElder) {
    return showElder > 60;
}
console.log(showElder);
console.log("\n");
// Mengecek dan memberikan nilai pertama yang lolos

// 5. Build-in method from()
const containers = ["Strawberry", "Mango", "Apple", "Grape"];
const checkContainers = Array.isArray(containers);
console.log(checkContainers);
console.log("\n");
// Memeriksa apakah tipe data variabel adalah array atau tidak

// 6. Build-in method join()
const planet = ["Merkurius", " Venus", " Earth", " Mars"];
const innerSolarSystem = planet.join();
console.log(innerSolarSystem);
console.log("\n");
// Mengubah array menjadi string

// 7. Build-in method map()
const numbers = [1, 2, 3, 4, 5];
const results = numbers.map(tenMultiplier);
function tenMultiplier(num) {
    return num * 10;
}
console.log(results);
console.log("\n");
// Membuat array baru dari pemanggilan function untuk setiap elemen array

// 8. Build-in method pop()
const embededDevices = ["Smartphone", "Smartwatch", "SmartTV", "DVDPlayer"];
embededDevices.pop();
console.log(embededDevices);
console.log("\n");
// Menghilangkan element array terakhir

// 9. Build-in method push()
const jabodetabek = ["Jakarta", "Bogor", "Depok", "Tangerang"];
jabodetabek.push("Bekasi");
console.log(jabodetabek);
console.log("\n");
// Menambahkan elemen baru ke akhiran array

// 10. Build-in method shift()
const computer = ["Mouse", "Keyboard", "Monitor", "CPU", "Audio"];
computer.shift();
console.log(computer);
// Menghilangkan elemen pertama pada array