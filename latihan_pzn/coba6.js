const cekOrang = (params) => {
    let {nama, gender, usia, statusMenikah,} = params;
    if (gender === "L") {
        gender = "Laki-Laki";
    } else if (gender === "P") {
        gender = "Perempuan";
    }
    if (statusMenikah === true) {
        statusMenikah = "Kawin";
    } else if (statusMenikah === false) {
        statusMenikah = "Lajang"
    }
    return `Halo nama saya ${nama}, saya seorang ${gender}, usia saya ${usia} dan saya ${statusMenikah}`;
}

console.log(cekOrang({
    nama: "Abu Tismun",
    gender: "L",
    usia: 20,
    statusMenikah: false
}))