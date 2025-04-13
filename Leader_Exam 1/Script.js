const info = document.getElementById("info")

info.addEventListener("click", function(e) {
    e.preventDefault()
    let Cardholder = document.getElementById("Cardholder")
    let cardnum = document.getElementById("cardnum")
    let MM = document.getElementById("MM")
    let YY = document.getElementById("YY")
    localStorage.setItem("person:", `${Cardholder.value},${cardnum.value}, ${MM.value}, ${YY.value}`)
})
