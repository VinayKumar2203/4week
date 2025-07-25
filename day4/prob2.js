function createCounter() {
    let count = 0;
    let counter = {
        increment: function () {
            count++
            return count
        },
        getCount: function () {
            return count
        }
    }
    return counter
}
let counter = createCounter();
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.getCount())