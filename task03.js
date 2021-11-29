const seleksiNilai = (key1, key2, arr) => {
    let maxVal = Math.max.apply(0, arr);
    let minVal = Math.min.apply(0, arr);

    if ((typeof key1 !== "number") || (typeof key2 !== "number")) {
        console.log("Input harus number");
    } else if ((key1 > maxVal) || (key2 > maxVal)) {
        console.log("Jumlah angka dalam dataArray tidak ada");
    } else if ((key1 < minVal) || (key2 < minVal)) {
        console.log("Jumlah angka dalam dataArray tidak ada");
    } else if (key1 > key2) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
    } else {
        let sorted = arr.sort(function (a, b) {return a - b})
        sorted = sorted.filter(function (arr) {
            return (arr >= key1) && (arr <= key2)
        })
        console.log(sorted);
    }
}

seleksiNilai(5, 14, [2, 25, 4, 14, 17]);