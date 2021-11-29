const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(`Hari ini adalah ${cek}, hari kerja`);
            } else {
                reject(new Error ("Hari ini bukan hari kerja"));
            }
        }, 3000)
    })
}

cekHariKerja("Kamis")
.then((res) => console.log(res))
.catch((err) => console.log(err))

/* ketika kita membuat new promise() artinya kita membuat janji baru
resolve() dipasangkan ke .then(resulr) sebagai resultnya
reject () dipasangkan ke .catch(error) sebagai error handlernya
resolve dan reject sebagai promise object, sedangkan then dan result adalah promise instance dari resolve dan reject

promise punya 3 state:
1. pending => keadaan awal, tidak terpenuhi atau tidak ditolak
2. fullfilled => operasi sukses/janjian terpenuhi, ke paramater resolve
3. rejected => operasi gagal, ke parameter reject */