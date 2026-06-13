document
.getElementById("loginForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    let email =
    document.querySelector(
        'input[name="email"]'
    ).value;

    let password =
    document.querySelector(
        'input[name="password"]'
    ).value;

    try{

        let response =
        await fetch(
            "http://localhost:8080/login",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({

                    email: email,

                    password: password

                })
            }
        );
        console.log("Status:", response.status);
        console.log("Response OK:", response.ok);
        
        let user =
        await response.json();

        console.log(user);

        if(!user || !user.email){

            alert(
                "Invalid Email or Password"
            );

            return;
        }

        localStorage.setItem(
            "userName",
            user.name
        );

        localStorage.setItem(
            "userEmail",
            user.email
        );

        localStorage.setItem(
            "userPhone",
            user.phone
        );

        console.log(
            localStorage.getItem("userName")
        );
        console.log(
                localStorage.getItem("userEmail")
            );
        console.log(
            localStorage.getItem("userPhone")
        );  

        alert(
            "Login Successful"
        );

        window.location.href =
            "home.html";

    }
    catch(error){

    console.error("LOGIN ERROR:", error);

    alert("Check console for error");

}

});