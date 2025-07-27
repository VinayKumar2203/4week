let arr = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
]
let taskcom = arr.filter((ele, i) => ele.tasksCompleted >= 5)
let performance = "";
let y = taskcom.map((ele, i) => {
    if (ele.rating >= 4.5) {
        performance = "Excellent"
    } else if (ele.rating >= 3 && ele.rating <= 4.5) {
        performance = "Good";
    }
    else {
        performance = "Needs Improvement"
    }
    return { name: ele.name, performance }
})
let reducedVal = y.reduce((acc, curr) => {
    if (acc[curr.performance]) {
        acc[curr.performance]++;
    } else {
        acc[curr.performance] = 1;
    }
    return acc;
}, {})
// console.log(y)

let finalVal = y.sort((x, y) => {
    return reducedVal[y.performance] - reducedVal[x.performance]
});
console.log(finalVal)