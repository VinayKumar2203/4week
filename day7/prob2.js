function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            // console.log("hello")
            let x = Math.random() * 1
            console.log(x);
            if (x >= 0.5) {
                return res("data fetched");
            } else {
                return rej("Network error");
            }
        }, 1000);
    })
}
// fetchData();

async function fetchDataHandler() {
    try {
        await fetchData()
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            });
    } catch (error) {
        console.log("Error fetching data", error)
    }
}

fetchDataHandler();