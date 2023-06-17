const Register = documet.getElementById("Registe");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let form = {
        Username : documet.getElementById("Username").value,
        Email : documet.getElementById("email").value,
        Password : documet.getElementById("Password").value,
    }
    localStorage.setItem("form", JSON.stringify(form));

});