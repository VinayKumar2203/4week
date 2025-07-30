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

// Step 1: Get number of test cases
const T = parseInt(lines[index++]);

// Step 2: Read each test case
for (let t = 0; t < T; t++) {
    const N = parseInt(lines[index++]); // Read size of array
    const arr = lines[index++].trim().split(' ').map(Number); // Read the array
    testCase.push(arr); // Add to testCase list
}

// Step 3: Process each test case
function processTestCases(cases) {
    for (let test of cases) {
        const minVal = Math.min(...test);
        const result = test.map(num => num > minVal ? -1 : num);
        console.log(result.join(' '));
    }
}

processTestCases(testCase);
