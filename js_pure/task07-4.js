// Data pertama
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
// Menampilkan data pertama
console.log("Data pertama");
console.log(data);
console.log("\n");

// Mengubah key dan value dari data pertama menjadi variabel baru
let newData = {
    ...data,
    name: "Vigar Rivai Putra",
    username: "vigarp_",
    email: "vigar.ext@gmail.com",
    hobby: "computers",
}

// Menampilkan variabel baru dengan key dan value yang sudah diubah
console.log("Data dengan key dan value yang sudah diubah");
console.log(newData);
console.log("\n");

// Mengambil key dan value dari object address (dimana address juga merupakan key dari data)
let {
    street,
    city,
} = data.address;

// Menampilkan key dan value dari object address
console.log("Menampilkan key dan value dari nested object address");
console.log(street);
console.log(city);
console.log(address);