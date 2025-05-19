const form = document.getElementById("form")
const div = document.getElementById("books")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    div.innerHTML = ""

    fetch("https://www.googleapis.com/books/v1/volumes?q={searchTerm}".value)
        .then(response => response.json())
        .then((result) => {
            result.array.forEach(element => {
                div.innerHTML += `
                <div>
                    <p>Title: ${element.volumeInfo.title}</p>
                    <p>Author: ${element.volumeInfo.authors[0]}</p>
                    <p>Publish Date: ${element.volumeInfo.publishedDate}</p>                
                </div>
            `
            });
        })
        .catch(error => {console.log(error)})
})