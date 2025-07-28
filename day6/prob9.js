let obj = { name: "Alice", hobbies: ["reading", "traveling"] }
function deepClone(obj) {
    let copy = JSON.parse(JSON.stringify(obj));
    copy.hobbies.push("coding");
    console.log("Clone", copy)
    console.log("Original", obj)
}
deepClone(obj);