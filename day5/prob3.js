let arr = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let result = arr.reduce((acc, curr) => {
    // console.log(acc)
    if (acc[curr]) {
        acc[curr]++;
    }
    else {
        acc[curr] = 1;
    }
    // console.log(curr);
    return acc;
}, {})

console.log(result);