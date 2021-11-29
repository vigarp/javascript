const orang = {
    nama: "Abu Tismun",
    umur: 20,
    alamat: {
        jalan: "Syahdan",
        kelurahan: "Palmerah",
        kecamatan: "Palmerah",
        kota: "Jakarta Barat"
    },
    skill: ["Computer", "Linux", "Networking"],
    statusMenikah: false,
    pengalaman: [
        {perusahaan: "IDM", selesai: 2021},
        {perusahaan: "PMT", selesai: 2018}
    ]
}

const sekolah = [
    {jenjang: "SD", lulusan: 2012},
    {jenjang: "SMP", lulusan: 2015},
    {jenjang: "SMK", lulusan: 2018},
]

orang.umur = 21;

const detilSekolah = sekolah.map((item, index) => {
    return index+1 + " " + ("Sekolah " + item.jenjang + " lulus tahun " + item.lulusan);
})

console.log(detilSekolah);