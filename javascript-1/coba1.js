// const greetings = (quote) => {
//     return `${quote}, senang bertemu kalian semua!`
// }

// const sayHello = (name, cb) => {
//     const hello = `Hello saya ${name} dan umuruku 12`
//     return cb(hello);
// }

// console.log(sayHello("Adi", greetings));

function greeting(name) {
    alert('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  processUserInput(greeting);