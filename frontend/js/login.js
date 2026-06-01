document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let email =
    document.querySelector('input[name="email"]').value;

    let password =
    document.querySelector('input[name="password"]').value;

    if(email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    alert("Login Successful");

    window.location.href = "home.html";

});