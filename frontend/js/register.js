document
.querySelector("#registerForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    let name =
    document.querySelector(
        'input[name="fullname"]'
    ).value;

    let phone =
    document.querySelector(
        'input[name="phone"]'
    ).value;

    let email =
    document.querySelector(
        'input[name="email"]'
    ).value;

    let password =
    document.getElementById(
        "password"
    ).value;

    let confirmPassword =
    document.getElementById(
        "confirmPassword"
    ).value;

    if(password !== confirmPassword){

        alert(
            "Passwords do not match"
        );

        return;
    }

    let user = {

        name: name,

        phone: phone,

        email: email,

        password: password

    };

    try{

        let response =
        await fetch(
            "http://localhost:8080/register",
            {

                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body:
                JSON.stringify(user)

            }
        );

        let result =
        await response.text();

        alert(result);

        if(result ===
            "Registration Successful"){

            window.location.href =
            "login.html";
        }

    }
    catch(error){

        console.error(error);

        alert(
            "Server connection failed"
        );
    }

});