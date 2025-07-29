function checkEvenNumber(number) {
    return new Promise((res, rej) => {
        console.log(typeof number)
        if (!typeof number == "number" && isNaN(number)) {
            return
        }
        if (number % 2 === 0) {
            return res(`${number} is even`);
        }
        else {
            return rej(`${number} is odd or invalid`);
        }
    })
}

checkEvenNumber("vinay")
    .then((res) => {
        console.log(res)
    })
    .catch((rej) => {
        console.log(rej);
    })
    .finally(() => {
        console.log("final output")
    });
