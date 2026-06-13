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

window.location.href =
"login.html";

}

}

function goSettings(){

window.location.href =
"settings.html";

}