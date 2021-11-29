const fetcher = (url, options) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => response.json())
        .then(json => {
            resolve(json)
        }).catch((err) => {
            reject(err)
        })
    })
}


fetcher("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res))
    .catch((err) => console.log(err))