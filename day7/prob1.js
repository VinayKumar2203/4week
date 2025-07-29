function timer(duration, onComplete) {
    setTimeout(() => {
        onComplete(duration)
    }, duration);
}
timer(2000, callBack);

function callBack(duration) {
    console.log("timer of ", duration, "ms finished")
}