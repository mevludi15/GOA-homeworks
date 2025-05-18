class BankAccount {
    #balance;
  
    constructor(startBalance = 0) {
      this.#balance = startBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
    } else {
        console.log("თქვენს ბალანსზე ამდენი თანხა არაა");
    }
    }
  
    getBalance() {
      return this.#balance;
    }
}



class Author {
    constructor(name) {
        this.name = name;
    }
}
  
  class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author; 
}
