console.log("Name:",
localStorage.getItem("userName"));

console.log("Email:",
localStorage.getItem("userEmail"));

console.log("Phone:",
localStorage.getItem("userPhone"));
window.onload = function(){
    document.getElementById(
        "userName"
    ).innerText =

    localStorage.getItem(
        "userName"
    ) || "Guest User";



    document.getElementById(
        "userEmail"
    ).innerText =

    localStorage.getItem(
        "userEmail"
    ) || "No Email";



    document.getElementById(
        "userPhone"
    ).innerText =

    localStorage.getItem(
        "userPhone"
    ) || "No Phone";

};


function saveProfile(){

    alert(
        "Profile updated successfully!"
    );

}


function logout(){

    let confirmLogout =
    confirm(
        "Are you sure you want to logout?"
    );

    if(confirmLogout){

        localStorage.clear();

        window.location.href =
        "login.html";
    }

}


function goSettings(){

    window.location.href =
    "settings.html";

}