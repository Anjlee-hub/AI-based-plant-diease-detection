function sendOTP(){

alert(
"OTP sent successfully!"
);

}

function resetPassword(){

let newPass =
document.getElementById(
"newPassword"
).value;

let confirmPass =
document.getElementById(
"confirmPassword"
).value;

if(newPass !== confirmPass){

alert(
"Passwords do not match!"
);

return;

}

alert(
"Password reset successful!"
);

window.location.href =
"login.html";

}