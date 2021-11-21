const siswa = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function displayValue(fillValue) {
    console.log(fillValue)
}

function searchName(key1, key2, callBacks) {
    let filtered = siswa.filter(function (str) {
        return str.includes(key1);
    });

    filtered = filtered.slice(0, key2);
    callBacks(filtered);
}

searchName("rol", 5, displayValue);