// Masukkan Nilai
const mtk = 89;
const bahasaIndonesia = 89;
const bahasaInggris = 89;
const ipa = 89;

// Validasi range dan tipe data disetiap nilai
if ((typeof mtk !== "number") || (mtk > 100)) {
    console.log("Periksa kembali nilai MTK");
}
else if ((typeof bahasaIndonesia !== "number") || (bahasaIndonesia > 100)) {
    console.log("Periksa kembali nilai Bahasa Indonesia");
}
else if ((typeof bahasaInggris !== "number") || (bahasaInggris > 100)) {
    console.log("Periksa kembali nilai Bahasa Inggris");
}
else if ((typeof ipa !== "number") || (ipa > 100)) {
    console.log("Periksa kembali nilai IPA");
}
else {
    
    // Menghitung jumlah dan rata-rata nilai
    let jumlahNilai = mtk + bahasaIndonesia + bahasaInggris + ipa;
    let rataNilai = jumlahNilai / 4;
    
    // Menampilkan rata-rata nilai
    console.log(`Nilai rata-rata Anda ialah ${rataNilai}`);

    // Menghitung nilai grade
    function penghitungGrade() {
        if (rataNilai >= 90) {
            grade = "Grade Anda A";
        } else if (rataNilai >= 80) {
            grade = "Grade Anda B";
        } else if (rataNilai >= 70) {
            grade = "Grade Anda C";
        } else if (rataNilai >= 60) {
            grade = "Grade Anda D";
        } else {
            grade = "Grade Anda E";
        }
        return grade;
    }
    let nilaiGrade = penghitungGrade();

    // Menampilkan nilai grade
    console.log(nilaiGrade);
}