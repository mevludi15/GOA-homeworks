const info = document.getElementById("register")

info.addEventListener("click", function(e) {
    e.preventDefault()
    let Cardholder = document.getElementById("Card_name")
    let cardnum = document.getElementById("card_number")
    let MM = document.getElementById("mm")
    let YY = document.getElementById("yy")
    let cvc = document.getElementById("cvc")
    localStorage.setItem("person:", `${Cardholder.value},${cardnum.value}, ${MM.value}, ${YY.value} ${cvc.value}`)
})
