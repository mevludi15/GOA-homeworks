class Person {

    constructor(balance, pin) {
        this.acauntNumber = Date.now()
        this.balance = balance
        this.pin = pin
    }

    get pin () {
        return this.pin
    }

    set pin (newPin) {
        this.pin = newPin
    }

    printInfo() {
        console.log(`acaunt number is ${this.acauntNumber}`)
    }
}