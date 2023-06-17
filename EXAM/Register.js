const registerForm = document.getElementById("registerForm");

// let data = [];

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let registerInfo = {
        // email: document.getElementById("email").value,
    //     username: document.getElementById("username").value,
    //     password: document.getElementById("password").value
    // }
    if (checkEmailAndUsername(registerInfo)) {
        alert("Username hoặc Email đã tồn tại !");
    } else {
        data.push(registerInfo);
        localStorage.setItem("data", JSON.stringify(data));
    }
    // if (checkEmailAndUsernameduplicate(registerInfo)) {
    //     alert("username hoặc email đã được tồn tại")
    // }
});

function checkEmailAndUsername(registerInfo) {
    let data = JSON.parse(localStorage.getItem("data")) || null;

    if (data == null) {
        return false;
    }

    for (let i = 0; i < data.length; i++) {
        if(data[i].email == registerInfo.email || data[i].username == registerInfo.username) {
            return true;
        }
    }
    return false;
}
