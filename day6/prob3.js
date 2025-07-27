function personalInfo(name, age) {
    console.log('name:-', name, " ", "age:-", age)
}
personalInfo.call(null, "vinay", 25);