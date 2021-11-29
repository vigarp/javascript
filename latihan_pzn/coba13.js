let dataBuku = [];
const getBooks = () => {
    setTimeout(()=> {
        dataBuku = ["Matematika", "Bahasa", "IPA"];
        console.log(dataBuku);
    }, 100);
};

const messageBooks = () => {
    setTimeout(() => {
        const message = "Jumlah buku saat ini";
        console.log(message);
    })
}

const bookFetched = () => {
    setTimeout(() => {
        console.log(`Jumlah buku ada ${dataBuku.length}`);
    }, 500)
}

getBooks();
messageBooks();
bookFetched();