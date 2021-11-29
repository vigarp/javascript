const car = {
    name: "Datsun",
    tipeBensin: "Pertamax",
    golonganMobil: "Sedan",
    mobilPosisi: "",
    
    gantiMobil: function(namaMobil) {
        this.name = namaMobil;
    },

    start: function (key1, tempat) {
        this.mobilPosisi = tempat;
        if (key1 === "jalan") {
            return `Mobil ${this.name} ${key1} ke ${this.mobilPosisi}`;
        }
    },
    stop: function(key1) {
        if (key1 === "berhenti") {
            return `Mobil ${this.name} ${key1} di ${this.mobilPosisi}`;
        }
    }
}

car.gantiMobil("Toyota");
console.log(car.start("jalan", "Surabaya"));
console.log(car.stop("berhenti"))
// console.log(car);