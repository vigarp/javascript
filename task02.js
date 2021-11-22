const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth", "Ella", "Faith", "Olivia", "Penelope"];

function displayValue(fillValue) {
    let nameList = fillValue.join(", ");
    console.log(nameList);
}

function searchName(key1, key2, callBacks) {
    let filtered = name.filter(function (str) {
        return str.includes(key1);
    });

    filtered = filtered.slice(0, key2);
    callBacks(filtered);
}

searchName("rol", 5, displayValue);