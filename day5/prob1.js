let arr = [
    { name: "laptop", price: 1000 },
    { name: "Mouse", price: 50 }
];

function processProducts() {
    let productNames = arr.map(product => product.name);
    let newArray = arr.forEach((ele, i) => {
        if (ele.price > 50) {
            console.log(`${ele.name} is above$50`)
        } else {
            console.log(`${ele.name} is belwo $50`)
        }
    })
}
processProducts();