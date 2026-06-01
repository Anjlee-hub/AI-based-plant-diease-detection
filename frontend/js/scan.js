function chooseImage(){

document
.getElementById("imageInput")
.click();

}

document
.getElementById("imageInput")
.addEventListener(

"change",

function(event){

const file =
event.target.files[0];

if(file){

const reader =
new FileReader();

reader.onload =
function(e){

document
.getElementById("previewImage")
.src =
e.target.result;

};

reader.readAsDataURL(file);

}

});

function startVoice(){

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

if(!SpeechRecognition){

alert(
"Speech Recognition not supported"
);

return;

}

const recognition =
new SpeechRecognition();

recognition.lang = "en-IN";

recognition.start();

recognition.onresult =
function(event){

document
.getElementById("voiceText")
.value =
event.results[0][0].transcript;

};

}

function detectDisease(){

let text =
document
.getElementById("voiceText")
.value;

if(text.trim()===""){

alert(
"Please describe the problem"
);

return;

}

window.location.href =
"result.html";

}