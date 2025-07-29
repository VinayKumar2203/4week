function startTask() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res("Task A completed");
        }, 1000);
    })
}

function processTask(ma) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`Task B processed: ${ma}`)
        }, 1500);
    })
}
function finalizeTask(main) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res("final result", main)
        }, 500);
    })
}

startTask()
    .then((res) => {
        console.log(processTask(res), res);
        return processTask(res);
    }).then((main) => {
        console.log(finalizeTask(main), main)
        return finalizeTask(main)
    }).then((finalOut) => {
        console.log(finalOut)
    })
    .catch((err) => {
        console.log(err)
    })
