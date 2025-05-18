const form = document.getElementById("form")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let i = 1
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const age = document.getElementById("age").value
    i++
    let obj1 = {
        name,
        email,
        age
    }

    
    
    localStorage.setItem(`person${i}`, JSON.stringify(obj1))

    form.reset()
})