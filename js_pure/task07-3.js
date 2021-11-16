const printSegitiga = 10;

// Validasi jenis data yg diinput
if (typeof printSegitiga !== "number") {
    console.log("Maaf input harus number");
} else {
    function pembuatPola() {
        // Inisialisasi row dan column
        let row, column;
        let output = "";

        // Operasi row di luar berkurang sedangkan column di dalamnya bertambah
        for (row = printSegitiga; row >= 0; row--) {
            for (column = 1; column <= row; column++) {
                output += column + " ";
            }
            // Mencetak hasil dari row dan column
            console.log(output);
            output = "";
        }
    }
    
    pembuatPola();
}