let num = `
2
3
1 3 2
5
3 2 2 1 1
`;

let testCase = [];
const lines = num.trim().split('\n');
let index = 0;

// Total test cases
const T = parseInt(lines[index++]);
console.log("Total Test Cases:", T);

// Read each test case
for (let t = 0; t < T; t++) {
    const N = parseInt(lines[index++]);
    const arr = lines[index++].split(' ').map(Number);
    testCase.push(arr);
}
console.log("Test Cases:", testCase);

// Function to process test cases
function processTestCases(cases) {
    for (let test of cases) {
        const minVal = Math.min(...test);
        const result = test.map(num => num > minVal ? -1 : num);
        console.log(result.join(' '));
    }
}

// Call the function
processTestCases(testCase);
