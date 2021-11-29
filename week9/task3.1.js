let auth = (user, pwd) => {
    return new Promise((resolve, reject) => {
        if ((user !== "admin") || (pwd !== 123)) {
            return reject(new Error(`Otentikasi salah`));
        } else {
            return resolve(`Selamat datang ${user}`)
        }
    })
}

auth("admin", 123)
.then((res) => console.log(res))
.catch((err) => console.log(err))