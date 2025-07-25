function outerFunction() {
    let message = "hello world";
    return function () {
        console.log(message);
    }
}
let outerfun = outerFunction();
outerfun();