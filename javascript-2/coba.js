

const greetings = (quote) => {
    const tambahan = "massel itu temen saya.";
    return `${quote}, ${tambahan} Senang bertemu kalian semua!`;
}

const sayHello = (name, cb) => {
    
    const hello = `Hello Saya ${name} dan umurku 12`;
    return cb(hello);
}

console.log(sayHello("Ari Wibowo" ,greetings));