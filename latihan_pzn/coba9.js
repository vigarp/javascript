const kataAlay = {
    keBesar: () => {
        const str = "makan apah hri nie?";
        return str.toUpperCase();
    },
    
    keKecil: () => {
        const str = "MIE APAH, SIE?";
        return str.toLowerCase();
    }
}

console.log(kataAlay.keBesar());
console.log(kataAlay.keKecil());