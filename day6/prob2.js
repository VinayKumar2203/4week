
function multiplyNumbers(a, b) {
    console.log(this.a * this.b);
}

 multiplyNumbers.apply({ a: 4, b: 5 });
