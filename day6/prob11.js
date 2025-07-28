let user = {
    username: "john_doe",
    showUsername: function () {
        console.log("method", this.username);
    }
}

function displayUsername() {
    console.log("display", this.username)
}
user.showUsername();
displayUsername();