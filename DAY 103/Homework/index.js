const prom1 = new Promise((resolve, reject) => {
    resolve("Hello Promise")
})


const prom2 = new Promise((resolve, reject) => {
    reject("Something went wrong!")
})

const prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2 seconds have passed")
    })
})

