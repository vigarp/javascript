// const salam = (nama, tempat, cb) => {
//     let ucapan = `Hai ${nama} di ${tempat}, salam kenal`
//     cb(ucapan);
// }

// const greetings = (quote) => {
//     console.log(quote);
// }

// salam("Jordan", "Solo", greetings);


const showSalim = (quote) => {
    console.log(quote);
}
const salim = (nama, callback) => {
    let sapa = `Hai ${nama}, salam kenal`
    return callback(sapa);
}

salim("abu", showSalim);