const biodata = {
    name: "Vigar",
    age: 20,
    hobbies: ["computer", "linux", "networking"],
    isMarried: false,
    schoolList: [
        {name: "SMKN 39 Jakarta", yearIn: 2015, yearOut: 2018, major: "Teknik Elektronika Industri"}
    ],
    skills: [
        {skillName: "Electronic", level: "Beginner"}
    ],
    interestInCoding: true
}

console.log(biodata);

if (biodata.interestInCoding === true ) {
    console.log("Vigar tertarik dengan coding");
} else
    console.log("Tidak tertarique");