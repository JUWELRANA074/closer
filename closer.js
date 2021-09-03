const bank = owner => {
    let balance = 0;
    return amount => {
        balance += amount;
        return balance
    }
}

const mofijBank = bank('mofij');
console.log(mofijBank(100));
console.log(mofijBank(300));
console.log(mofijBank(10));
console.log(mofijBank(50));